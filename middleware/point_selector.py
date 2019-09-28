import numpy as np
from random_points import *
from requests import request
from app import city
from co2_calculator import co2_savings
import argparse


def get_difficulty_specs(difficulty):
    # get difficulty param from frontend
    if difficulty == 1:
        kilometers = 15
        elevation = 2
    elif difficulty == 2:
        kilometers = 25
        elevation = 2
    elif difficulty == 3:
        kilometers = 40
        elevation = 5
    elif difficulty == 4:
        kilometers = 60
        elevation = 10
    elif difficulty == 5:
        kilometers = 60
        elevation = 20
    else:
        kilometers = np.random.choice(range(15, 60))
        elevation = np.random.choice(range(2, 20))
    return {"kilometers": kilometers, "elevation": elevation}


def get_random_initial_point(city, kilometers):
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
        "radius": kilometers
        / 3,  # diving by 3 just to get a minimum of 3 points of interest and assuring
    }
    return {"random_point": initial_random_point, "city_geolocation": city_geolocation}


def get_point_details(point):
    point_details = request.get(point)
    return point_details


def request_points_nearby(initial_point):
    request.get(initial_point)
    points_close_to_initial_point = response
    return points_close_to_initial_point


def select_best_point(points_close_to_initial_point):
    # select the best point considering rating and distance from first point
    best_rating = 0
    for i, point in enumerate(points_close_to_initial_point):
        if point["rating"] > best_rating:
            best_rating = point["rating"]
            best_point_index = i
    best_point = points_close_to_initial_point[best_point_index]
    return best_point


# still needs to be connected to Directions API
def get_distance_elevation_between_points(current_point, next_point):
    request.get(
        [
            {"lat": current_point["lat"], "lng": current_point["lng"]},
            {"lat": next_point["lat"], "lng": next_point["lng"]},
        ]
    )
    distance_between_points = response["distance"]
    elevation_between_points = response["elevation"]
    return {"distance": distance_between_points, "elevation": elevation_between_points}


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--city")
    parser.add_argument("--difficulty")
    args = vars(parser.parse_args())
    difficulty = get_difficulty_specs(difficulty=args["difficulty"])
    initial_point = get_random_initial_point(
        city=args["city"], kilometers=difficulty["kilometers"]
    )["random_point"]
    initial_point_details = get_point_details(initial_point)
    distance_to_city = get_distance_elevation_between_points(
        initial_point, city_geolocation
    )
    total_route_length = 0
    total_route_elevation = 0
    points_of_interest = [initial_point_details]
    while (
        total_route_length < difficulty["kilometers"]
        and total_route_elevation < difficulty["elevation"]
    ):
        points_close_to_initial_point = request_points_nearby(initial_point)
        best_point = select_best_point(points_close_to_initial_point)
        info_between_points = get_distance_elevation_between_points(
            initial_point, best_point
        )
        total_route_length += info_between_points["distance"]
        total_route_elevation += info_between_points["elevation"]
        best_point_details = get_point_details(best_point)
        points_of_interest.append(best_point_details)
        initial_point = best_point
    # average CO2 grams emission per km for a 10 year-old car in Germany is 151.1 according to https://ec.europa.eu/eurostat/databrowser/view/t2020_rk330/default/table?lang=en
    co2_savings = total_route_length * 151.1
    return {
        "points_of_interest": points_of_interest,
        "distance_to_city": distance_to_city,
        "route_tags": route_tags,
        "co2_savings": co2_savings,
    }

