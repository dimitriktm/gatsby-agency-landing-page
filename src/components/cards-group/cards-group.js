import React from "react"
import "./cards-group.scss"
export default ({ cards }) => (
    <div className="cards-group">
        {cards.map((card, index) => (
            <div className="cards-group-item" key={index}>
                {card}
            </div>
        ))}
    </div>
)
