import React from "react"

import "./header-content-block.scss"
export default ({ title, text, className }) => (
    <div className={`header-content-block ${className}`}>
        <h2>{title}</h2>
        <p className="text-lg">{text}</p>
    </div>
)
