from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def login():
    error = None
    print(request.form)
    return 0 
