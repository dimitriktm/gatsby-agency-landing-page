import React from "react"

import BtnWithOpacity from "../btn-with-opacity"

import "./card-with-label.scss"
export default ({ label, title, children }) => (
    <div className="card-with-label">
        <div className="card-with-label-content">
            <BtnWithOpacity
                as="span"
                className="card-with-label-label rounded-full"
            >
                {label}
            </BtnWithOpacity>
            <h3 className="mb-3">{title}</h3>
            <div className="card-with-label-line"></div>
            <div className="card-with-label-body">{children}</div>
        </div>
    </div>
)
