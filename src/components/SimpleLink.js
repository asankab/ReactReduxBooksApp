    import React from 'react'
    import WithToolTipHOC from "./hoc/WithToolTipHOC";

    const SimpleLink = (props) => {
            return (
                <a href={props.navigationUrl} title={props.linkTitle}>
                    {props.linkText} - {props.name}
                </a>
            )
    }

    export default WithToolTipHOC(SimpleLink)