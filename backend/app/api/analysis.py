import os
from flask import request, Blueprint, jsonify, abort
import pandas as pd

from sqlalchemy import create_engine

analysis = Blueprint('analysis', __name__, url_prefix="/api")
id = "root"
pw = "q1w2e3r4"
db_name = "data_analysis_project"

db_address = "mysql+pymysql://{0}:{1}@127.0.0.1:3306/{2}".format(id, pw, db_name)
db_connection = create_engine(db_address)
conn = db_connection.connect()

@analysis.route("/result", methods=["GET"])
def get_analysis_result():
    '''
    #
    #
    #
    '''
    region = request.args.get("region")
    category = request.args.get("category")

    df = pd.read_sql_table('closed_group', conn)

    # 업종-지역 둘 다 입력한 경우
    if region and category:
        df = df[df['지역(구)'] == region]

        x_series = df['폐업연월']
        y_series = df[category]
        
        x_axis = x_series.values.tolist()
        y_axis = y_series.values.tolist()

        ret = {}
        for idx, value in enumerate(x_axis):
            ret[value] = y_axis[idx]
        
        return jsonify(ret), 200

    # 지역만 입력한 경우
    elif region:
        pass

    # 업종만 입력한 경우
    elif category:
        pass