import os
from flask import request, Blueprint, jsonify, abort
import pandas as pd
from pprint import pprint

from sqlalchemy import create_engine

analysis = Blueprint('analysis', __name__, url_prefix="/api")
id = "root"
pw = "Enwns1989!"
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

    ret = {}

    # 업종-지역 둘 다 입력한 경우
    if region and category:
        df = pd.read_sql_table('closed_group', conn)
        df = df[df['지역(구)'] == region]

        ret["data"] = {}

        try:
            x_series = df['폐업연월']
            y_series = df[category]
        except:
            return abort(400, "INVALID_DATA")

        x_axis = x_series.values.tolist()
        y_axis = y_series.values.tolist()

        for idx, value in enumerate(x_axis):
            ret["data"][value] = y_axis[idx]

        ret["description"] = "\'{0}\' 지역에서 \'{1}\' 업종의 폐업 정보입니다.".format(
            region, category)

    # 지역만 입력한 경우
    else:
        pre_df = pd.read_sql_table('pre_closed_count', conn)
        post_df = pd.read_sql_table('post_closed_count', conn)

        ret["pre-covid"] = {}
        ret["post-covid"] = {}

        pre_max_data = 0
        post_max_data = 0

        if region:
            try:
                x_series = pre_df.iloc[:, 0]
                y_series = pre_df[region]
            except:
                return abort(400, "INVALID_DATA")

            x_axis = x_series.values.tolist()
            y_axis = y_series.values.tolist()

            for idx, value in enumerate(x_axis):
                ret["pre-covid"][value] = y_axis[idx]
                if pre_max_data < y_axis[idx]:
                    pre_max_cat = value
                    pre_max_data = y_axis[idx]

            try:
                x_series = post_df.iloc[:, 0]
                y_series = post_df[region]
            except:
                return abort(400, "INVALID_DATA")

            x_axis = x_series.values.tolist()
            y_axis = y_series.values.tolist()

            for idx, value in enumerate(x_axis):
                ret["post-covid"][value] = y_axis[idx]
                if post_max_data < y_axis[idx]:
                    post_max_cat = value
                    post_max_data = y_axis[idx]

            ret["description"] = "코로나 이전 \'{0}\' 지역에서 가장 많이 폐업한 업종은 \'{1}\'입니다. {2} (폐업 점포 수 / 지역 인구수). 코로나 이후 \'{0}\' 지역에서 가장 많이 폐업한 업종은 \'{3}\'입니다. {4} (폐업 점포 수 / 지역 인구수).".format(
                region, pre_max_cat, round(pre_max_data, 2), post_max_cat, round(post_max_data, 2))

        elif category:
            pre_df = pre_df.set_index("Unnamed: 0").transpose().reset_index()
            post_df = post_df.set_index("Unnamed: 0").transpose().reset_index()

            try:
                x_series = pre_df.iloc[:, 0]
                y_series = pre_df[category]
            except:
                return abort(400, "INVALID_DATA")

            x_axis = x_series.values.tolist()
            y_axis = y_series.values.tolist()

            for idx, value in enumerate(x_axis):
                ret["pre-covid"][value] = y_axis[idx]
                if pre_max_data < y_axis[idx]:
                    pre_max_cat = value
                    pre_max_data = y_axis[idx]

            try:
                x_series = post_df.iloc[:, 0]
                y_series = post_df[category]
            except:
                return abort(400, "INVALID_DATA")

            x_axis = x_series.values.tolist()
            y_axis = y_series.values.tolist()

            for idx, value in enumerate(x_axis):
                ret["post-covid"][value] = y_axis[idx]
                if post_max_data < y_axis[idx]:
                    post_max_cat = value
                    post_max_data = y_axis[idx]
            
            ret["description"] = "코로나 이전 \'{0}\' 업종에서 가장 많이 폐업한 지역은 \'{1}\'입니다. {2} (폐업 점포 수 / 지역 인구수). 코로나 이후 \'{0}\' 업종에서 가장 많이 폐업한 지역은 \'{3}\'입니다. {4} (폐업 점포 수 / 지역 인구수).".format(
                category, pre_max_cat, round(pre_max_data, 2), post_max_cat, round(post_max_data, 2))

        else:
            return abort(400, "INVALID_DATA")

    pprint(ret)
    return jsonify(ret), 200
