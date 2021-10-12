from flask import request, Blueprint, jsonify, abort

from app import db, bcrypt
from app.models import User, History
from authManager import create_access_token, create_refresh_token, jwt_required


auth = Blueprint('auth', __name__, url_prefix="/api")

@auth.route("/register", methods=["POST"])
def post_register():
    '''
    # register api
    '''
    email = request.json.get("email")
    raw_pw = request.json.get("pw")
    pw = bcrypt.generate_password_hash(raw_pw)

    if User.query.filter(User.email == email).all():
        return abort(409, "DUPLICATE_ID")
    
    new_user = User({"email": email, "pw": pw})
    db.session.add(new_user)
    try:
        db.session.commit()
    except:
        db.session.rollback()
        return abort(500, "INTERNAL_SERVER_ERROR")
    
    return '', 201

@auth.route("/login", methods=["POST"])
def post_login():
    '''
    # login api
    '''
    email = request.json.get("email")
    pw = request.json.get("user_pw")

    user = User.query.filter(User.email == email).first()
    
    if user and bcrypt.check_password_hash(user.pw, pw):
        return {
            "access-token": create_access_token(user.id),
            "refresh-token": create_refresh_token()
        }
    
    return abort(401, "INVALID_DATA")