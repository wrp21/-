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

    time_count = pd.read_csv('../dataAnalysis/whole.csv', encoding='cp949')
    time_count.to_sql(name = 'whole', con = db_connection, if_exists='replace', index = False)
add_to_db()