import React from "react"
import Button from "react-bootstrap/Button"
/**
 * Bootstrap btn sub class/module
 *
 * @param {any} params.children - children to render
 * @param {any} paramas.props - you can pass any react-boostrap and other props
 */
export default ({ children, ...props }) => (
  <Button {...props} className="button-rounded-full button-xl">
    {children}
  </Button>
)
