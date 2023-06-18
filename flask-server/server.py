from flask import Flask,jsonify,request
import requests 
from flask_cors import CORS

from geopy.geocoders import Nominatim

app=Flask(__name__)
CORS(app)
@app.route("/members",methods=['GET','POST'])
def members():
    # if request.method=='POST':
    #     city=request.form.get('city')
    #     print (city)
    
    city = "New York"  # Hardcoded city name
    
    geolocator = Nominatim(user_agent="flask-server")
    city_location = geolocator.geocode(city)


    latitude = city_location.latitude
    longitude = city_location.longitude



    # this is for 7 days 
    url= f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&hourly=temperature_2m,precipitation,windspeed_10m&temperature_unit=fahrenheit"


    #url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,windspeed_10m&temperature_unit=fahrenheit&forecast_days=1"
    r=requests.get(url).json()


    # firebase (realtime )


    return jsonify(r)

















# # airquality function 



@app.route("/airQuality",methods=['GET','POST'])
def airQuality():
    # if request.method=='POST':
    #     city=request.form.get('city')
    #     print (city)
    
    city = "New York"  # Hardcoded city name
    
    geolocator = Nominatim(user_agent="flask-server")
    city_location = geolocator.geocode(city)


    latitude = city_location.latitude
    longitude = city_location.longitude





    url_air=f"https://air-quality-api.open-meteo.com/v1/air-quality?latitude={latitude}&longitude={longitude}&hourly=us_aqi&past_days=14" 

    airQuality=requests.get(url_air).json()



    return jsonify(airQuality)

if __name__=="__main__":
    app.run(debug=False)


































































# to test input form works 

# from flask import Flask, request
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/members', methods=['GET', 'POST'])
# def members():
#     if request.method == 'POST':
#         data= request.get_json()
#         city = data['city']

#         print(f"Received city: {city}")
#         return 'City received by the backend'
#     else:
#         return 'This is the members endpoint'

# if __name__ == '__main__':
#     app.run(debug=False)
