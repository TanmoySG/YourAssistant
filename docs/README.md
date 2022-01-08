# Architecture of the Backend for YourAssistant

There are two components in the backend - The Flask Server, `app.py` and The Model `model.py`.

The model is imported when the flask server starts. The model is built whenever it is imported by the flask server, hence it uses the data in `intents.json` to build the model. 

Whenever a new Intent is added using the `/intent/add` route - the model is "reloaded" or "reimported" hence the model rebuilds with the new data as well.

# Access to the API

There are 4 Routes using which a developer/app can interact with the API. The routes come after the hosting URL.

## The Blank Route

```
ENDPOINT: /
```

Returns a Welcome Message.

## Interact Route

```
METHOD:   GET
ENDPOINT: /interact?query="<your-query-here>"
PAYLOAD:  NONE
```

Returns a JSON with the Response from the Chatbot Backend.
```
{
    "response" : <server-response>
}
```

## List Intents

```
METHOD:   GET
ENDPOINT: /intent/list
PAYLOAD:  NONE
```

Returns a JSON with the Intents.
```
{
    "response" : {
        "intents" : [...]
    }
}
```

## Add Intents

```
METHOD:   POST
ENDPOINT: /intent/add?token=<your-token-here>
PAYLOAD:  {
            "tag": "<tag>",
            "patterns": [
                "<pattern1>",
                "<pattern2>",
                ...
            ],
            "responses": [
                "<response>",
                ...
            ],
            "context_set": ""
        }
```

This is a Protected Route and requires a Token for Usage. The token is generally set while setting up the API in the `token.json` file. The token must be used **Without Quotes `" "`**

Returns a response from server.
```
{
    "response" : "intents updated" / "Token Incorrect"
}
```