import os
from flask import request, Blueprint, jsonify, abort
import pandas as pd
from pprint import pprint

from sqlalchemy import create_engine

analysis = Blueprint('analysis', __name__, url_prefix="/api")

db_address = os.getenv("SQLALCHEMY_DATABASE_URI")
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

    # 하나만 입력한 경우
    else:
        pre_df = pd.read_sql_table('pre_closed_count', conn)
        post_df = pd.read_sql_table('post_closed_count', conn)

        ret["pre-covid"] = {}
        ret["post-covid"] = {}
        ret["description"] = ""

        pre_ranking = []
        post_ranking = []

        if region:
            # 코로나 이전
            try:
                x_series = pre_df.iloc[:, 0]
                y_series = pre_df[region]
            except:
                return abort(400, "INVALID_DATA")

            x_axis = x_series.values.tolist()
            y_axis = y_series.values.tolist()

            for idx, value in enumerate(x_axis):
                ret["pre-covid"][value] = y_axis[idx]
                pre_ranking.append((y_axis[idx], value))

            pre_ranking.sort()
            ret["description"] += make_desc(True, True, True, region, pre_ranking)
            ret["description"] += make_desc(True, False, True, region, pre_ranking)

            # 코로나 이후
            try:
                x_series = post_df.iloc[:, 0]
                y_series = post_df[region]
            except:
                return abort(400, "INVALID_DATA")

            x_axis = x_series.values.tolist()
            y_axis = y_series.values.tolist()

            for idx, value in enumerate(x_axis):
                ret["post-covid"][value] = y_axis[idx]
                post_ranking.append((y_axis[idx], value))

            post_ranking.sort()
            ret["description"] += make_desc(False, True, True, region, post_ranking)
            ret["description"] += make_desc(False, False, True, region, post_ranking)

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
                pre_ranking.append((y_axis[idx], value))

            pre_ranking.sort()
            ret["description"] += make_desc(True, True, False, category, pre_ranking)
            ret["description"] += make_desc(True, False, False, category, pre_ranking)

            try:
                x_series = post_df.iloc[:, 0]
                y_series = post_df[category]
            except:
                return abort(400, "INVALID_DATA")

            x_axis = x_series.values.tolist()
            y_axis = y_series.values.tolist()

            for idx, value in enumerate(x_axis):
                ret["post-covid"][value] = y_axis[idx]
                post_ranking.append((y_axis[idx], value))

            post_ranking.sort()
            ret["description"] += make_desc(False, True, False, category, post_ranking)
            ret["description"] += make_desc(False, False, False, category, post_ranking)

        else:
            return abort(400, "INVALID_DATA")
    return jsonify(ret), 200

def make_desc(pre, max, region, user_input, ranking):
    if pre:
        period = "이전"
    else:
        period = "이후"
    
    if max:
        asc = "많이"
        ranks = [-1, -2, -3]
    else:
        asc = "적게"
        ranks = [0, 1, 2]
    
    if region:
        desc_format = "코로나 {0} \'{1}\' 지역에서 가장 {2} 폐업한 업종 TOP 3입니다. (기준: 폐업 점포 수 / 해당 지역 인구 수 * 100)\n"
    else:
        desc_format = "코로나 {0} \'{1}\' 업종에서 가장 {2} 폐업한 지역 TOP 3입니다. (기준: 폐업 점포 수 / 해당 지역 인구 수 * 10000)\n"
    ranking_format = "{0}위 - {1} ({2})\n"
    
    description = ""
    description += desc_format.format(period, user_input, asc)
    for idx, rank in enumerate(ranks):
        y_val, x_val = ranking[rank]
        description += ranking_format.format(idx + 1, x_val, round(y_val, 2))
    
    return description