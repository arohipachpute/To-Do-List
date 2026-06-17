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
        "title": data['title'],
        "items": []
    }
    lists_db[next_id] = new_list

    next_id += 1

    return jsonify(new_list),201

@app.route('/api/lists/<int:list_id>/items', methods=['POST'])
def add_item_to_list(list_id):
    # 1. Grab the JSON data sent from the frontend
    data = request.get_json()
    
    # 2. Check if the list actually exists
    if list_id not in lists_db:
        return jsonify({"error": "List not found"}), 404
        
    # 3. Check if the frontend sent the text for the item
    if not data or 'text' not in data:
        return jsonify({"error": "Item text is required"}), 400
        
    # 4. Create the new item
    # We make sure the list has an 'items' array, then figure out the new item's ID
    if "items" not in lists_db[list_id]:
        lists_db[list_id]["items"] = []
        
    new_item = {
        "id": len(lists_db[list_id]["items"]) + 1,
        "text": data['text'],
        "completed": False
    }
    
    # 5. Add it to the list and return success!
    lists_db[list_id]["items"].append(new_item)
    
    return jsonify(new_item), 201


if __name__ == '__main__':
    app.run(debug=True, port=5000)
