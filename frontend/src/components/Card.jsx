import React, { useState } from 'react';
import './Card.css';

function CreateListCard() {
    const [listId, setListId] = useState(null);
    const [items, setItems] = useState([]);
    const [newItemText, setNewItemText] = useState("");

    const handleCreateList = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/lists', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'New List' }), 
            });

            if (response.ok) {
                const data = await response.json();
                setListId(data.id);
                setItems(data.items || []);
            }
        } catch (error) {
            console.error("Error creating list:", error);
        }
    };

    const handleAddItem = async (e) => {
        e.preventDefault(); // Prevent page reload on form submit
        if (!newItemText.trim()) return; // Don't add empty items
        
        try {
            const response = await fetch(`http://localhost:5000/api/lists/${listId}/items`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: newItemText }), 
            });

            if (response.ok) {
                const newItem = await response.json();
                setItems([...items, newItem]); // Add new item to UI list
                setNewItemText(""); // Clear input box
            }
        } catch (error) {
            console.error("Error talking to backend:", error);
        }
    };

    // If we have a list active, show the items and the input box!
    if (listId) {
        return (
            <div className="card-container" style={{
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                cursor: 'default',
                width: '18rem', /* Made wider to properly fit the input and button */
                boxSizing: 'border-box' /* Ensures padding doesn't push the width out */
            }}>
                <h4 style={{marginBottom: '10px', width: '100%', textAlign: 'left'}}>New List</h4>
                <ul style={{listStyle: 'none', padding: 0, width: '100%', margin: 0}}>
                    {items.map(item => (
                        <li key={item.id} style={{padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                            {item.text}
                        </li>
                    ))}
                </ul>
                <form onSubmit={handleAddItem} style={{display: 'flex', width: '100%', marginTop: '12px', boxSizing: 'border-box'}}>
                    <input 
                        type="text" 
                        value={newItemText} 
                        onChange={(e) => setNewItemText(e.target.value)} 
                        placeholder="Add a task..."
                        style={{
                            flex: 1, 
                            minWidth: 0, /* Prevents input from forcing the container to expand */
                            marginRight: '8px', 
                            borderRadius: '4px', 
                            border: '1px solid rgba(255,255,255,0.2)', 
                            padding: '6px 10px', 
                            background: 'rgba(255,255,255,0.1)', 
                            color: 'white',
                            outline: 'none'
                        }}
                    />
                    <button type="submit" style={{borderRadius: '4px', border: 'none', padding: '6px 12px', background: '#b400ff', color: 'white', fontWeight: 'bold', cursor: 'pointer'}}>+</button>
                </form>
            </div>
        );
    }

    // Otherwise, show the creation button
    return (
        <div onClick={handleCreateList} className="card-container">
            <span>+ Create List</span>
        </div>
    );
}

export default CreateListCard;
