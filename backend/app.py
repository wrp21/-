import os
from app import create_app
from flask_cors import CORS


app = create_app()
CORS(app)

os.makedirs(app.config['STATIC_IMAGES_DIR'], exist_ok=True)

if __name__ == "__main__":
    app.run('0.0.0.0', 5000, debug=True)