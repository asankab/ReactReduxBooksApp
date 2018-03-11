import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

class SimpleTooltip extends Component {

    constructor(props) {
        super(props)
    }

    showTootTip(node) {
        ReactTooltip.show(this.refs[node]);
    }

    render() {
        let { node, data } = this.props;
        console.log('node: ', node)
        return (
            <div>
                <p ref={node} data-tip={data}></p>
                <button onClick={() => { this.showTootTip(node) }}>{data}</button>
                <ReactTooltip />
            </div>
        )
    }
}

SimpleTooltip.propTypes = {

}

SimpleTooltip.defaultProps = {

}

export default SimpleTooltip