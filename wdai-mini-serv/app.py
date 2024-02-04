from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from user import Users, User


app = Flask(__name__)
CORS(app)

app.config["JWT_SECRET_KEY"] = "super-secret"
jwt = JWTManager(app)

users = Users()


def get_user_from_request(user_request) -> User:
    username = user_request.json.get("username", None)
    email = user_request.json.get("email", None)
    password = user_request.json.get("password", None)

    user = User(username, password, email)
    if not user.is_valid():
        raise ValueError("could not get user")
    return user


@app.route("/register", methods=["POST"])
def register():
    try:
        user = get_user_from_request(request)
        users.add(user)

        return jsonify({"msg": "ok"}), 200
    except ValueError:
        return jsonify({"msg": "bad params"}), 401
    except KeyError:
        return jsonify({"msg": "username already taken"}), 401


@app.route("/login", methods=["POST"])
def login():
    try:
        user = get_user_from_request(request)

        if not users.contains(user):
            return jsonify({"msg": "bad username or password"}), 401

        access_token = create_access_token(identity=user.username)

        return jsonify(token=access_token), 200
    except ValueError:
        return jsonify({"msg": "bad params"}), 401


@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


@app.route("/", methods=["GET"])
def root():
    return ""


if __name__ == "__main__":
    app.run()
