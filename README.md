# YourAssistant


This Repo documents the Code and Usage instruction for the Your Assistant Backend API.

## Usage

For usage Documentation head to [docs/README.md](docs/README.md)

## Setup

Clone the Repository
```
git clone https://github.com/TanmoySG/YourAssistant/
```

Browse to the `YourAssistant` directory and Install the dependancies using `pip`
```
cd YourAssistant
pip install -r requirements.txt
```

Edit the `token.json` to add your token
```
{
    "token" : "{your token here}"
}
```

Run the flask server using 
```
flask run
```

### Using `setup.py` Script

You can also use the `setup.py` script to complete the setup. The setup-script installs the dependancies and also adds the token to the `token.json` file

Download the `v0.1-Beta Release` files from [@TanmoySG/YourAssistant v0.1-Beta](https://github.com/TanmoySG/YourAssistant/releases/tag/v0.1-Beta)

```
YourAssistantSource.tar.gz
setup.py
```

Run the `setup.py` script
```
python setup.py
```
Run the Flask server 
```
flask run
```
