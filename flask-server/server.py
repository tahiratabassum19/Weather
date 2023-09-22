from flask import Flask,jsonify,request
import requests, json
from flask_cors import CORS

from geopy.geocoders import Nominatim

app=Flask(__name__)
CORS(app)
@app.route("/hourly",methods=['GET','POST'])
def members():
    #if request.method=='POST':
    # data = request.json
    # city = data.get('city')
    # print(city)

    city="New York"
    geolocator = Nominatim(user_agent="flask-server")
    city_location = geolocator.geocode(city)


    latitude = city_location.latitude
    longitude = city_location.longitude
    print("latitude::",latitude)
    print("longitude",longitude)



    # this is for 7 days
    #url= f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&hourly=temperature_2m,precipitation,windspeed_10m&temperature_unit=fahrenheit&timezone=America%2FNew_York"
   #trying auto time zone
    url= f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&hourly=temperature_2m,precipitation,windspeed_10m&temperature_unit=fahrenheit&timezone=auto"


    print(url)
    #url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,windspeed_10m&temperature_unit=fahrenheit&forecast_days=1"
    r=requests.get(url).json()
    print(r)

    app.logger.debug(r)

    return jsonify(r),200


# # airquality function



@app.route("/airQuality",methods=['GET','POST'])
def airQuality():

    # data = request.json
    # city = data.get('city')
    # print(city)
    # city=str(city)
    # print("after:",city)

    city = "New York"

    geolocator = Nominatim(user_agent="flask-server")
    city_location = geolocator.geocode(city)


    latitude = city_location.latitude
    longitude = city_location.longitude
    print (latitude)





    url_air=f"https://air-quality-api.open-meteo.com/v1/air-quality?latitude={latitude}&longitude={longitude}&hourly=us_aqi&past_days=14"

    airQuality=requests.get(url_air).json()



    return jsonify(airQuality)


# News API



@app.route("/news")


def news_head():
 
    city = "New York"
   # reverse geocoding to get the country from city to get the news api
    geolocator = Nominatim(user_agent="flask-server")
    city_location = geolocator.geocode(city)


    latitude = city_location.latitude
    longitude = city_location.longitude
    location = geolocator.reverse(str(latitude) + "," + str(longitude))
    address = location.raw['address']
    country = address.get('country', '')
    country_code = address.get('country_code')

    url_news = f"https://newsapi.org/v2/top-headlines?country=US&apiKey=c0ea415cc7e44662af5c610f6088c5f9"

    news = requests.get(url_news).json()

    found_articles = []

    for article in news["articles"]:
        url_to_image = article["urlToImage"]
        url = article["url"]
        published_at = article["publishedAt"]
        title = article["title"]


        found_article = {
            "title": title,
            "urlToImage": url_to_image,
            "url": url,
            "publishedAt": published_at
        }

        found_articles.append(found_article)
        print(found_articles)

    if found_articles:
        return jsonify(found_articles)
    else:
        return "No News"


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
