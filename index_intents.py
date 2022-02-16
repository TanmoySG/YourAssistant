import json

def getIndexedIntents():
    with open("indexed_intents.json", "r") as indexedIntentsFile:
        indexedIntents = json.load(indexedIntentsFile)
    return indexedIntents["indexed_patterns"]

with open("intents.json", "r") as jsonFile:
    intentData = json.load(jsonFile)
    
intents = intentData["intents"]

indexed_patterns = []

for intent in intents:
    patterns = intent["patterns"]
    for pattern in patterns:
        indexed_patterns.append(pattern)
        indexed_patterns.append(pattern.lower())
        

with open("indexed_intents.json", "r") as indexedIntentsFile:
    indexedIntents = json.load(indexedIntentsFile)
    indexedIntents["indexed_patterns"].extend(indexed_patterns)
    indexedIntents["indexed_patterns"] = list(set(indexedIntents["indexed_patterns"]))
    with open("indexed_intents.json", "w") as jsonFile:
        json.dump(indexedIntents, jsonFile, indent=4)