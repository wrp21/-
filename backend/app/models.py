from . import db

class User(db.Model):
    '''
    # user
    # - id (int, pk)
    # - email (varchar(32), not null)
    # - pw (binary(60), not null)
    '''

    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
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

class History(db.Model):
    '''
    # history
    # - id (int, pk)
    # - category (varchar(32), not null)
    # - region (varchar(32), not null)
    # - user_id (int, not null, fk) (fk - user.id)
    '''
    _tablename__ = "history"
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    category = db.Column(db.String(32), nullable=False)
    region = db.Column(db.String(32), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __init__(self, data):
        self.category = data.get('category')
        self.region = data.get('region')
        self.user_id = data.get('user_id')
    
    def to_dict(self):
        return {
            "category": self.category,
            "region": self.region
        }