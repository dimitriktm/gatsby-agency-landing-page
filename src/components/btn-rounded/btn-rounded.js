import React from "react"
import Button from "react-bootstrap/Button"
import "./btn-rounded.scss"
export default ({ children, ...props }) => (
    <Button {...props} className="btn-lg rounded-full">
        {children}
    </Button>
)
