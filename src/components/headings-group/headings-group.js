import React from "react"
import "./headings-group.scss"
export default ({ title_primary, title_secondary }) => (
    <div className="headings-group-section">
        <h2>{title_primary}</h2>
        <h3 className="font-weight-semibold">{title_secondary}</h3>
    </div>
)
