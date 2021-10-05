from app import db

# 1. user
# - id (int, pk)
# - email (varchar(32), not null)
# - pw (binary(60), not null)

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincreament=True)
    email = db.Column(db.String(32), nullable=False, unique=True)
    pw = db.Column(db.BINARY(60), nullable=False)

    def __init__(self, data):
        self.email = data.get('email')
        self.pw = data.get('pw')
    
    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "pw": self.pw
        }