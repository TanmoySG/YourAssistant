import json
import tarfile
import os

print("[*] Extracting the Code and Files from YourAssistantSource.tar.gz")
sourceZip = "YourAssistantSource.tar.gz"

if sourceZip.endswith("tar.gz"):
    tar = tarfile.open(sourceZip, "r:gz")
    tar.extractall()
    tar.close()
elif sourceZip.endswith("tar"):
    tar = tarfile.open(sourceZip, "r:")
    tar.extractall()
    tar.close()

print("[*] Installing Dependancies from requirement.txt")
os.system("pip install -r requirements.txt")


adminToken = input("Set an Admin Token: ")

print("[*] Setting Admin Token")
with open("token.json", "r") as tokenFile :
    tokenFileJSON = json.load(tokenFile)
    tokenFileJSON['token'] = adminToken
    with open("token.json", "w") as tokenFileW:
        json.dump(tokenFileJSON, tokenFileW, indent=4)

print("["+u'\u2713'+"] YourAssistant Backend Setup Complete.")

print("Start the Server using -> flask run")