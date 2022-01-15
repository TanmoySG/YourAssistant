import flask
import json
import model
import importlib

app = flask.Flask(__name__)


@app.route("/interact", methods=["GET", "POST"])
def assistant():
    user_request = flask.request.args.get('query')
    model.classify(user_request)
    chatbot_response = model.response(user_request)
    return {"response": chatbot_response}


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
