import flask
import json
import model
# import index_intents
import importlib

hod_list = [
    "hod cse", "hod it", "hod ece", "hod fet", "hod ie", "hod ce", "hod mcd"
]

department_list = [
    "cse", "it", "ece", "fet", "ie", "ce", "mcd"
]

course_list = [
    "diploma", "btech", "bdes", "mtech", "phd"
]

app = flask.Flask(__name__)


def vet_responses(model_reponse):
    if model_reponse == "choose_hod":
        return hod_list

    if model_reponse == "choose_department":
        return department_list

    if model_reponse == "choose_course":
        return course_list

    return model_reponse


@app.route("/interact", methods=["GET", "POST"])
def assistant():
    user_request = flask.request.args.get('query')
    model.classify(user_request)
    chatbot_response = model.response(user_request)
    vetted_response = vet_responses(chatbot_response)
    return {"response": vetted_response}


@app.route("/", methods=["GET", "POST"])
def index():
    return "<h1>Welcome to YourAssistant-API</h1>"


@app.route("/intent/list", methods=["GET", "POST"])
def intent_list():
    with open("intents.json", "r") as intents_json:
        intents_list = json.load(intents_json)
    return {"response": intents_list}


@app.route("/intent/add", methods=["POST"])
def intent_add():
    action_json = flask.request.get_json(force=True)
    action_token = flask.request.args.get('token')
    with open("token.json") as token_doc:
        token_json = json.load(token_doc)
        token = token_json["token"]
    with open("intents.json", "r") as intents_json:
        intents_list = json.load(intents_json)
        intents_array = intents_list["intents"]
        if action_token == token:
            intents_array.append(action_json)
            with open("intents.json", 'w') as f:
                json.dump(intents_list, f, indent=4)
            importlib.reload(model)
            return {"response": "intents updated"}
        else:
            return {"response": "Token Incorrect"}


if __name__ == "__main__":
    app.run(debug=True)
