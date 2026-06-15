from flask import Flask , request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

lists_db={}
next_id = 1

@app.route('/api/lists',methods=['POST'])# decorator 
def create_list():
    global next_id

    data = request.get_json()

    if not data or 'title' not in data:
        return jsonify({"error": "Title is required"}),400

    new_list = {
        "id" : next_id,
        "title": data['title']
    }
    lists_db[next_id] = new_list

    next_id += 1

    return jsonify(new_list),201

if __name__ == '__main__':
    app.run(debug=True, port=5000)
