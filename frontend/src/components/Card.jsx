import React from 'react';
import './Card.css';

function CreateListCard() {
    const handleClick = async () => {
        console.log("Div was clicked!");
        
        try {
            const response = await fetch('http://localhost:5000/api/lists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: 'New List' }), // Placeholder data
            });

            if (response.ok) {
                const data = await response.json();
                console.log("List created successfully:", data);
                // Optionally handle success (e.g., update state, show notification)
            } else {
                console.error("Failed to create list:", response.statusText);
            }
        } catch (error) {
            console.error("Error creating list:", error);
        }
    };
    return (
        <div onClick={handleClick} className="card-container">
            <span>+ Create List</span>
        </div>
    );
}

export default CreateListCard;
