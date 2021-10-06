from flask import request, Blueprint, jsonify, abort

from app.models import User
from app import db

analysis = Blueprint('analysis', __name__, url_prefix="/api")

@analysis.route("/result", methods=["GET"])
def get_analysis_result():
    '''
    #
    #
    #
    '''
    
