from . import db
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import hashlib
from datetime import datetime



class Question(db.Model):
    __tablename__="question"
    id=db.Column(db.INTEGER,primary_key=True)
    title=db.Column(db.String(64),unique=True,index=True)
    content=db.Column(db.Text())
    updateTime=db.Column(db.DateTime(),default=datetime.utcnow)



