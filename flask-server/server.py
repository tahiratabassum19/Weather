from flask import Flask,jsonify,request
import requests 
from flask_cors import CORS

from geopy.geocoders import Nominatim

app=Flask(__name__)
CORS(app)
@app.route("/hourly",methods=['GET','POST'])
def members():
    #if request.method=='POST':
    
    city = "New York"  # Hardcoded city name

    geolocator = Nominatim(user_agent="flask-server")
    city_location = geolocator.geocode(city)


    latitude = city_location.latitude
    longitude = city_location.longitude



    # this is for 7 days 
    url= f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&hourly=temperature_2m,precipitation,windspeed_10m&temperature_unit=fahrenheit&timezone=America%2FNew_York"


    #url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,windspeed_10m&temperature_unit=fahrenheit&forecast_days=1"
    r=requests.get(url).json()


    # firebase (realtime )


    return jsonify(r)

















# # airquality function 



@app.route("/airQuality",methods=['GET','POST'])
def airQuality():
  
    
    city = "New York" 
    
    geolocator = Nominatim(user_agent="flask-server")
    city_location = geolocator.geocode(city)


    latitude = city_location.latitude
    longitude = city_location.longitude





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
 

    weather_words = [
    'Storm', 'Rain', 'Thunderstorm', 'Tornado', 'Hurricane', 'Typhoon', 'Flood', 'Snow', 'Blizzard',
    'Hail', 'Heatwave', 'Cold', 'Wind', 'Drought', 'Monsoon', 'Fog', 'Temperature', 'Climate', 
    'Meteorology', 'Weather forecast', 'Sunshine', 'Clouds', 'Drizzle', 'Sleet', 'Gale', 'Cyclone', 
    'Mist', 'Rainfall', 'Precipitation', 'Humidity', 'Chill', 'Thaw', 'Rainbow', 'Whirlwind', 'Downpour',
    'Freezing', 'Barometer', 'Tropical', 'Aurora', 'Tremor', 'Heat index', 'Gusty', 'Overcast', 'Pollen',
    'Forecasting', 'UV Index', 'Heatstroke', 'Wet', 'Dry', 'Visibility', 'Dew', 'Squall', 'Muggy', 'Celsius',
    'Fahrenheit', 'Pressure', 'Anemometer', 'Arctic', 'Anticyclone', 'Monsoon', 'Gust', 'Calm', 'Drizzle',
    'Jet stream', 'Cirrus', 'Cumulus', 'Stratus', 'Cyclonic', 'Supercell', 'El Niño', 'La Niña', 'Cirrocumulus',
    'Cumulonimbus', 'Stratocumulus', 'Nimbostratus', 'Haboob', 'Breeze', 'Solar radiation', 'Thermometer',
    'Wind chill', 'Ceiling', 'Haze', 'Visibility', 'Rain gauge', 'Hygrometer', 'Evaporation', 'Atmosphere',
    'Isobar', 'Swell', 'Zephyr', 'Sunrise', 'Sunset', 'Aurora borealis', 'Aurora australis', 'Trade winds',
    'Sea breeze', 'Land breeze', 'Advection', 'Coriolis effect', 'Monsoonal flow', 'Beaufort scale', 'Troposphere',
    'Stratosphere', 'Mesosphere', 'Thermosphere', 'Exosphere', 'Polar vortex', 'Air pressure', 'Weather balloon']
    

    weather_wordsl = [word.lower() for word in weather_words]


    url_news="https://newsapi.org/v2/top-headlines?country=us&apiKey=c0ea415cc7e44662af5c610f6088c5f9" 

    news=requests.get(url_news).json()


    #print(news)  
    



    found_articles = []

    for article in news["articles"]:
        title = article["title"].lower()
        # description = article["description"].lower()
        # content = article["content"].lower()

        if any(word in title for word in weather_wordsl):
            url_to_image = article["urlToImage"]
            url = article["url"]
            published_at = article["publishedAt"]

            found_article = {
                "urlToImage": url_to_image,
                "url": url,
                "publishedAt": published_at
            }

            found_articles.append(found_article)
        else:
            return "No News"
            #print(found_articles)

    return jsonify(found_articles)

        

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
