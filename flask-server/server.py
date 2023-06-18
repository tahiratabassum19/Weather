from flask import Flask,jsonify,request
import requests 
from flask_cors import CORS

from geopy.geocoders import Nominatim



#url_endpoint=
#API_Key=
#city_name

#url=url?q={ city name will go here leave empty formattingwill work}&units=imperial&api_key=API_Key
# req=request.get(url.format(city_name)).json()
# if city is in Firebase:
#     then collect output json from here 

# else if city is not in firebase 
#      collect it from API in JSOn 


#how to store json data from flask to firebase and also get it back 


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

    # url="https://api.open-meteo.com/v1/forecast?latitude=40.712728&longitude=-74.0060152&hourly=temperature_2m,relativehumidity_2m,precipitation,rain,showers,snowfall,pressure_msl,windspeed_10m,temperature_80m&temperature_unit=fahrenheit"


    # this is for 7 days 
    url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,windspeed_10m&temperature_unit=fahrenheit"


    #url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,windspeed_10m&temperature_unit=fahrenheit&forecast_days=1"
    r=requests.get(url).json()

   # return jsonify(weather)

    #print(r)
    return jsonify(r)

















# # airquality function 



# @app.route("/airQuality",methods=['GET','POST'])
# def airQuality():
#     # if request.method=='POST':
#     #     city=request.form.get('city')
#     #     print (city)
    
#     city = "New York"  # Hardcoded city name
    
#     geolocator = Nominatim(user_agent="flask-server")
#     city_location = geolocator.geocode(city)


#     latitude = city_location.latitude
#     longitude = city_location.longitude





#     url_air="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.5235&longitude=13.4115&hourly=us_aqi&past_days=14" 

#     airQuality=requests.get(url_air).json()



#     return jsonify(airQuality)

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
