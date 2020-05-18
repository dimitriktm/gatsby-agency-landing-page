import React from "react"
import "./page-block.scss"
/**
 *
 * Block of the page such as about us, contacts, posts ...
 * @param props.as - tag of wrapper
 * @param props.spacing - vertical spacing {md, lg, xl}
 * @param className - class name to add
 */
export default ({
    as = "section",
    spacing = "md",
    className,
    children,
    ...props
}) => {
    let Tagname = as
    return (
        <Tagname
            {...props}
            className={`page-block page-block-${spacing} ${className} `}
        >
            {children}
        </Tagname>
    )
}
