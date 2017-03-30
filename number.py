import requests
from flask import Flask
app = Flask(__name__)

url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCSckEwXBJmJEUzIo6NplQ5g&key=AIzaSyAJYe8sLNi8n0SQF_ZnmeuflkGeQAIGM3Y"

@app.route("/")
def hello():
   r = requests.get(url).json()
   number = r["items"][0]["statistics"]["subscriberCount"]

   return '{"number": ' + number + '}'

app.run()
