import React from "react"
import "./tech-icon.scss"

export default ({ icon }) => (
    <div className="tech-icon">
        <i className={`fab fa-${icon}`}></i>
    </div>
)
