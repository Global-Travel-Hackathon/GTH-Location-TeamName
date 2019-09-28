# app.py

from flask import Flask, request  # import main Flask class and request object
import subprocess

app = Flask(__name__)  # create the Flask app


@app.route("/get_route")
def get_route():
    city = request.args.get("city")  # if key doesn't exist, returns None
    difficulty = request.args.get("difficulty")  # if key doesn't exist, returns None
    points_of_interest = subprocess.run(
        f"python point_selector.py --city {city} --difficulty {difficulty}"
    )
    return points_of_interest


if __name__ == "__main__":
    app.run(debug=True, port=5000)  # run app in debug mode on port 5000

