import pandas as pd
from sqlalchemy import create_engine

def add_to_db():
    id = "testuser"
    pw = "Enwns1989!"
    db_name = "data_analysis_project"

    db_address = "mysql+pymysql://{0}:{1}@127.0.0.1:3306/{2}".format(id, pw, db_name)
    db_connection = create_engine(db_address)

    df = pd.read_csv('../dataAnalysis/closed_group.csv', encoding='utf-8')
    df.to_sql(name="closed_group", con=db_connection, if_exists='replace', index=False)

add_to_db()