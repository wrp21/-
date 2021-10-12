import jwt
from flask import request, current_app, abort
from datetime import datetime, timedelta
from functools import wraps

def create_token(data):
    return jwt.encode(data, current_app.config["JWT_SECRET_KEY"], algorithm="HS256")

def decode_token(token):
    return jwt.decode(token, current_app.config["JWT_SECRET_KEY"], "HS256")

def create_access_token(id):
    return create_token(
        {
            "id": id,
            "exp": datetime.utcnow() + timedelta(minutes=2)
        }
    )

def create_refresh_token():
    return create_token(
        {
            "exp": datetime.utcnow() + timedelta(hours=12)
        }
    )

def jwt_required(func):
    @wraps(func)
    def wrapper():
        access_token = request.headers.get("access-token")
        refresh_token = request.headers.get("refresh-token")

        if access_token:
            try:
                payload = decode_token(access_token)
            except jwt.InvalidTokenError:
                return abort(401, "INVALID_ACCESS_TOKEN")
            except jwt.ExpiredSignatrueError:
                return abort(401, "EXPIRED_ACCESS_TOKEN")
            return func(payload.get("id"))

        elif refresh_token:
            try:
                payload = decode_token(refresh_token)
            except jwt.InvalidTokenError:
                return abort(401, "INVALID_REFRESH_TOKEN")
            except jwt.ExpiredSignatrueError:
                return abort(401, "EXPIRED_REFRESH_TOKEN")

            id = payload.get("id")
            return func(id, create_access_token(id))

        else:
            return abort(401, "UNAUTHORIZED_USER")

    return wrapper
