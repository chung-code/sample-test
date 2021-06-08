from flask import Flask, request
from flask_cors import CORS, cross_origin

import numpy as np
import pandas as pd
import json

app = Flask(__name__)
CORS(app)

# data = pd.read_csv("./data/GPC.csv")
# data

@app.route("/")
def home():
    return "hello"

@app.route("/get")
def preprocessing():
    data = pd.read_csv("../data/english_word.txt", delimiter="\n", header=None, names=['Word'])
    freq = data['Word'].value_counts()
    result = freq.to_json(orient="split")
    return result

@app.route("/emotion")
def emotion():
    data = pd.read_csv("../data/searched_input_NOUN_emotion.txt", header=None, names=['Word', 'pos', 'neg'], sep="\t", encoding='utf-8')
    Word = set(data['Word'].dropna().tolist())

    list_emotion = []
    for i in Word:
        dic_emotion = {}
        count = len(data[(data['Word'] == i)])
        pos = len(data[(data['Word'] == i) & (data['pos'] == 'pos-1')])
        neg = count - pos
        
        dic_emotion['text'] = i
        dic_emotion['value'] = int(count)
        dic_emotion['pos'] = pos
        dic_emotion['neg'] = neg
        
        list_emotion.append(dic_emotion)
    
    json_emotion = json.dumps(list_emotion)
    return json_emotion

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', threaded=True)