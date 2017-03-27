import requests
from flask import Flask
app = Flask(__name__)

url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=id=UCSckEwXBJmJEUzIo6NplQ5g&key=AIzaSyAGTK0pT5ySHWRshTxtfk--anEgq4Yz-zk"

@app.route("/")
def hello():
   r = requests.get(url).json()
   number = r["items"][0]["statistics"]["subscriberCount"]

   return '{"number": ' + number + '}'

app.run()
