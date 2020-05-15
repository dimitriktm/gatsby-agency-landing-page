import React from "react"
import Button from "react-bootstrap/Button"

export default ({ className = "", children, ...props }) => (
  <Button {...props} className={`button-primary-flat ${className}`}>
    {children}
  </Button>
)
