import React from 'react';

function Reactions(props) {

     return (
    <div className="reactions-container">
        <h3>Your Responses:</h3>
        {props.cards.map(card => (
            props.react[card.id] && (
                <div key={card.id} className="reaction-card">
                    <p><strong>{card.front}</strong></p>
                    <p>Your take: {props.react[card.id]}</p>
                </div>
            )
        ))}
    </div>);
}

export default Reactions;