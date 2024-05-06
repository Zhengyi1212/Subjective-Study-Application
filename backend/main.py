from flask import Flask,jsonify, request
from flask_cors import CORS

app = Flask(__name__)

app.config.from_object(__name__)

CORS(app, resource = {r"/*":{'origins':"*"}})
CORS(app, resource = {r"/*":{'origins':'http://localhost:8081',"allow_headers":"Access_Control-Allow-Origin"}})

@app.route('/#/login',methods=['POST'])
def index():
    user_name = request.form.get('id')
    print(user_name)


if __name__ == "__main__":
    app.run(debug = True)