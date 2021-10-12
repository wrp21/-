from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify("Hello World")


@app.route("/register", methods=["POST"])
def register():
    if request.method == 'POST':
        json_data = request.get_json()
        email = json_data['email']
        pw = json_data['pw']

        return jsonify({"data": {"msg":"success"}, "status":201})


@app.route("/result", methods=["POST"]) # GET으로 바꿔야함
def result():
    if request.method == 'POST':
        json_data = request.get_json()
        category = json_data['category']
        region = json_data['region']
        delay = input()
        return jsonify(json_data)



@app.route("/login", methods=["POST"])
def login():
    return jsonify({"data": {"msg":"success"}, "status":201})


@app.route("/history", methods=["GET"])
def history():
    return jsonify({"data": {"msg":"success"}, "status":201})


@app.route("/region", methods=["GET"])
def region():
    return jsonify({"data": {"msg":"success"}, "status":201})


@app.route("/category", methods=["GET"])
def category():
    return jsonify({"data": {"msg":"success"}, "status":201})


if __name__ == '__main__':
    
    app.run(debug=True)

