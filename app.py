from flask import Flask, request
from flask_cors import CORS, cross_origin

import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

# data = pd.read_csv("./data/GPC.csv")
# data

@app.route("/")
def home():
    return "hello"

@app.route("/get")
def preprocessing():
    data = pd.read_csv("./data/english_word.txt", delimiter="\n", header=None, names=['Word'])
    freq = data['Word'].value_counts()
    result = freq.to_json(orient="split")
    return result

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000', threaded=True)