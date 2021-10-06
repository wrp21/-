from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from config import Config

db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()

# Create flask app
def create_app():
    app = Flask(__name__, static_folder="statics/images")
    app.config.from_object(Config)
    
    from . import models

    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)

    register_blueprints(app)

    return app

def register_blueprints(app):
    from app.api.analysis import analysis
    #from app.api import __

    app.register_blueprint(analysis, url_prefix="/api")
    #app.register_blueprint(__, url_prefix="/api")