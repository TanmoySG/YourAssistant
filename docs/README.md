# Architecture of the Backend for YourAssistant

There are two components in the backend - The Flask Server, `app.py` and The Model `model.py`.

The model is imported when the flask server starts. The model is built whenever it is imported by the flask server, hence it uses the data in `intents.json` to build the model. 

Whenever a new Intent is added using the `/intent/add` route - the model is "reloaded" or "reimported" hence the model rebuilds with the new data as well.
