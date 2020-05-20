import React from "react"
import Button from "react-bootstrap/Button"
import "./btn-with-opacity.scss"

export default ({ className = "", children, ...props }) => (
    <Button
        {...props}
        className={`button-with-opacity font-weight-semibold ${className}`}
    >
        {children}
    </Button>
)
