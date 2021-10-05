import os
from dotenv import load_dotenv

load_dotenv(verbose=True)

class Config(object):
    SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI")
    SQLALCHEMY_TRACK_MODIFICATIONS = os.getenv("SQLALCHEMY_TRACK_MODIFICATIONS")
    JWT_SECRET_KEY = os.getenv("SECRET_KEY")
    SECRET_KEY = os.getenv("SECRET_KEY")
    STATIC_IMAGES_DIR = os.getenv("STATIC_IMAGES_DIR")