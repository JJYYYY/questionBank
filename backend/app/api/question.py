from . import api
from app.models import Question
import json
from flask import request,jsonify
from app import db


@api.route("/question",methods=["GET","POST"])
def question():
    data=json.loads(request.get_data(as_text=True))
    print(data)
    question=Question(title=data["title"],content=data["content"])
    db.session.add(question)
    db.session.commit()
    return "sucess"