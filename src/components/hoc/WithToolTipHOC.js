import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

const WithToolTipHOC = (WrappedComponent) => {
    return class withToolTipHOC extends Component {

        constructor(props){
            super(props)

            this.showTootTip = this.showTootTip.bind(this)
        }

        showTootTip(node) {
            /*    e && e.stopPropagation()
            console.log('handle click') */
            //{ this.state.tooltipVisible && <Tooltip /> }
            ReactTooltip.show(this.refs[node]);
        }

        render() {
            WithToolTipHOC.propTypes = {
                Id: PropTypes.string,
                linkText: PropTypes.string
            }

            const localProp = {
                name: "name prop"
            }

            //console.log(this.props.Id)
            return (
                <div key={"tooltipContainer_" + this.props.Id}>
                    <div>
                        <p data-for = {this.props.Id} ref={this.props.Id} data-tip={this.props.linkText} data-delay-hide="0"></p>
                        <button onClick={() => { this.showTootTip(this.props.Id); console.log(this.props.Id) }}>{this.props.linkText}</button>
                        <ReactTooltip id = {this.props.Id} />
                    </div>
                    <WrappedComponent {...this.props} name = {localProp.name}/>
                </div>
            )
        }
    }
}

export default WithToolTipHOC