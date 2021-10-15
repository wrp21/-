import pandas as pd
from sqlalchemy import create_engine


def add_to_db():
    id = "root"
    pw = "asdf1234"
    db_name = "data_analysis_project"

    db_address = "mysql+pymysql://{0}:{1}@127.0.0.1:3306/{2}".format(
        id, pw, db_name)
    db_connection = create_engine(db_address)

    df = pd.read_csv('../dataAnalysis/csvdata/closed_group.csv', encoding='cp949')
    df.to_sql(name="closed_group", con=db_connection,
              if_exists='replace', index=False)

    # 전체 기간의 시간 - 건수 데이터를 whole 테이블에 추가
    time_count = pd.read_csv('../dataAnalysis/csvdata/whole.csv', encoding='cp949')
    time_count.to_sql(name='whole', con=db_connection,
                      if_exists='replace', index=False)

    pre_closed_count = pd.read_csv(
        '../dataAnalysis/csvdata/past_closed_normalized.csv', encoding='cp949')
    pre_closed_count.to_sql(
        name='pre_closed_count', con=db_connection, if_exists='replace', index=False)

    post_closed_count = pd.read_csv(
        '../dataAnalysis/csvdata/present_closed_normalized.csv', encoding='cp949')
    post_closed_count.to_sql(
        name='post_closed_count', con=db_connection, if_exists='replace', index=False)

    # 지역구별 개업중인 점포 수 데이터를 opening_group 테이블에 추가
    
    cat_closed_per_shop_count = pd.read_csv(
        '../dataAnalysis/csvdata/opening_normalized.csv', encoding='cp949')
    opening_group.to_sql(name='opening_group',
                         con=db_connection, if_exists='replace', index=False)


add_to_db()
