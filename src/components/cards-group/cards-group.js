import React from "react"
import "./cards-group.scss"
export default ({ cards }) => (
    <div className="cards-group">
        {cards.map(card => (
            <div className="cards-group-item">{card}</div>
        ))}
    </div>
)
