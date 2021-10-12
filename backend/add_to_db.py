import pandas as pd
from sqlalchemy import create_engine

def add_to_db():
    id = "root"
    pw = "q1w2e3r4"
    db_name = "data_analysis_project"

    db_address = "mysql+pymysql://{0}:{1}@127.0.0.1:3306/{2}".format(id, pw, db_name)
    db_connection = create_engine(db_address)

    df = pd.read_csv('../dataAnalysis/closed_group.csv', encoding='cp949')
    df.to_sql(name="closed_group", con=db_connection, if_exists='replace', index=False)

    # 전체 기간의 시간 - 건수 데이터를 whole 테이블에 추가
    time_count = pd.read_csv('../dataAnalysis/whole.csv', encoding='cp949')
    time_count.to_sql(name = 'whole', con = db_connection, if_exists='replace', index = False)

    # 코로나 전후로 구분된 지역별 폐업건수 데이터를 past_present_count 테이블에 추가
    past_present_count = pd.read_csv('../dataAnalysis/past_present_count.csv', encoding = 'cp949')
    past_present_count.to_sql(name = 'past_present_count', con = db_connection, if_exists = 'replace', index = False)

    # 지역구별 개업중인 점포 수 데이터를 opening_group 테이블에 추가
    opening_group = pd.read_csv('../dataAnalysis/opening_group.csv', encoding = 'cp949')
    opening_group.to_sql(name = 'opening_group', con = db_connection, if_exists = 'replace', index = False)
add_to_db()