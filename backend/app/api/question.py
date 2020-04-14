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


@api.route("/questions",methods=["GET","POST"])
def questions():
    data=json.loads(request.get_data(as_text=True))
    if not data:
        allData=Question.query.all()
        result = [{"id": data.id, "title": data.title, "content": data.content, "updateTime": data.updateTime} for data
                  in allData]
        return jsonify({"data": result})
    else:
        id=data["id"]
        print(id)
        article=Question.query.filter(Question.id == id).first()
        db.session.delete(article)
        db.session.commit()
        return "sucess"