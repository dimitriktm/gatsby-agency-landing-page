import React from "react"
import "./social-btn.scss"
export default ({ icon_name, href }) => (
    <a href={href} className="social-btn">
        <i className={icon_name}></i>
    </a>
)
