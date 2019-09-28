import numpy as np
from random_points import *
import requests
import argparse
import os
import json
import sys


def get_difficulty_specs(difficulty):
    # get difficulty param from frontend
    if difficulty == 1:
        duration = 3
    elif difficulty == 2:
        duration = 6
    elif difficulty == 3:
        duration = 9
    else:
        duration = np.random.choice(range(3, 10))
    return duration


def get_random_initial_point(city):
    # get city from frontend
    if city == "Barcelona":
        random_point = np.random.choice(random_point_barcelona)
        city_geolocation = {"lat": 41.3850752, "lng": 2.1711517}
    elif city == "Berlin":
        random_point = np.random.choice(random_point_berlin)
        city_geolocation = {"lat": 52.5178505, "lng": 13.3848614}
    # get points close to random point
    initial_random_point = {
        "lat": random_point["lat"],
        "lng": random_point["lng"],
        "place_id": random_point["place_id"],
    }
    return {
        "initial_random_point_info": initial_random_point,
        "city_geolocation": city_geolocation,
    }


def get_point_details(point):
    print(point)
    if len(point) == 3:
        response = requests.get(f'http://10.10.72.215:3000/places/{point["place_id"]}')
    else:
        response = requests.get(
            f'http://10.10.72.215:3000/places/{point["json_result_object"]["place_id"]}'
        )
    name = json.loads(response.text)["json_result_object"]["name"]
    place_id = json.loads(response.text)["json_result_object"]["place_id"]
    lat = json.loads(response.text)["json_result_object"]["geometry"]["location"]["lat"]
    lng = json.loads(response.text)["json_result_object"]["geometry"]["location"]["lng"]
    images = json.loads(response.text)["json_result_object"]["photos"]
    icon = json.loads(response.text)["json_result_object"]["icon"]
    rating = json.loads(response.text)["json_result_object"]["rating"]
    number_ratings = json.loads(response.text)["json_result_object"][
        "user_ratings_total"
    ]
    reviews = json.loads(response.text)["json_result_object"]["reviews"]
    opening_hours = json.loads(response.text)["json_result_object"].get("opening_hours")
    review_summary = json.loads(response.text)["json_result_object"].get(
        "review_summary"
    )
    point_details = {
        "name": name,
        "place_id": place_id,
        "lat": lat,
        "lng": lng,
        "images": images,
        "icon": icon,
        "rating": rating,
        "number_ratings": number_ratings,
        "number_reviews": len(reviews),
        "reviews": reviews,
        "opening_hours": opening_hours,
        "review_summary": review_summary,
    }
    return point_details


def request_points_nearby(initial_point):
    print(initial_point)
    if len(initial_point) == 3:
        response = requests.get(
            f'http://10.10.72.215:3000/near_places/?lat={initial_point["lat"]}&lng={initial_point["lng"]}'
        )
    else:
        response = requests.get(
            f'http://10.10.72.215:3000/near_places/?lat={initial_point["json_result_object"]["geometry"]["location"]["lat"]}&lng={initial_point["json_result_object"]["geometry"]["location"]["lng"]}'
        )
    points_close_to_initial_point = json.loads(response.text)
    return points_close_to_initial_point


def select_best_point(points_close_to_initial_point, current_point):
    print(points_close_to_initial_point)
    # select the best point considering rating and distance from first point
    # best_rating = 0
    # breakpoint()
    # points_used_list = [current_point["place_id"]]
    for i, point in enumerate(points_close_to_initial_point):
        if len(current_point) == 3:
            if point["json_result_object"]["place_id"] == current_point["place_id"]:
                pass
        else:
            if (
                point["json_result_object"]["place_id"]
                == current_point["json_result_object"]["place_id"]
            ):
                pass
        #     if point["rating"] == None:
        #         pass
        #     elif point["rating"] > best_rating:
        #         best_rating = point["json_result_object"]["rating"]
        #         best_point_index = i
        return points_close_to_initial_point[i]


def get_distance_duration_between_points(current_point, next_point):
    print(current_point, next_point)
    # breakpoint()
    # https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=YOUR_API_KEY
    response = requests.get(
        f'https://maps.googleapis.com/maps/api/distancematrix/json?origins={current_point["lat"]}%2C{current_point["lng"]}&destinations={next_point["lat"]}%2C{next_point["lng"]}&mode=bicycling&units=metric&key={os.getenv("G_API_KEY")}'
    )
    sys.stderr.write(response.text + "\n")
    distance_between_points = (
        json.loads(response.text)["rows"][0]["elements"][0]["distance"]["value"] / 1000
    )  # in kilometers
    duration_between_points = (
        json.loads(response.text)["rows"][0]["elements"][0]["duration"]["value"] / 3600
    )  # in hours
    return {"distance": distance_between_points, "duration": duration_between_points}


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--city")
    parser.add_argument("--difficulty")
    args = vars(parser.parse_args())
    difficulty = get_difficulty_specs(difficulty=args["difficulty"])
    initial_random_point = get_random_initial_point(city=args["city"])
    initial_point = initial_random_point["initial_random_point_info"]
    city_geolocation = initial_random_point["city_geolocation"]
    initial_point_details = get_point_details(initial_point)
    distance_to_city = get_distance_duration_between_points(
        initial_point, city_geolocation
    )["distance"]
    total_route_length = 0
    total_route_duration = 0
    points_of_interest = [initial_point_details]
    loop = 0
    while (total_route_duration < difficulty) and loop != 3:
        # breakpoint()
        points_close_to_initial_point = request_points_nearby(initial_point)
        best_point = select_best_point(points_close_to_initial_point, initial_point)
        info_between_points = get_distance_duration_between_points(
            initial_point, best_point
        )
        total_route_length += info_between_points["distance"]
        total_route_duration += info_between_points["duration"]
        best_point_details = get_point_details(best_point)
        points_of_interest.append(best_point_details)
        initial_point = best_point
        loop += 1
    # average CO2 grams emission per km for a 10 year-old car in Germany is 151.1 according to https://ec.europa.eu/eurostat/databrowser/view/t2020_rk330/default/table?lang=en
    co2_savings = round((total_route_length * 151.1) / 1000, 1)  # in Kg

    # this will be sent to the frontend endpoint
    print(points_of_interest, distance_to_city, co2_savings)

