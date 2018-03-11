import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {

    constructor(props) {
        super(props)

        this.state = {
            submitable: false,
            submited: false
        }
    }

    render() {
        let { id, buttonText, CssClassName, clickHandler, disabled } = this.props;

        return (
            <input
                type="submit"
                key={'submit_button_' + id}
                onClick={clickHandler}
                className={CssClassName}
                value={buttonText}
                disabled={disabled}
            />
        )
    }
}

Button.propTypes = {
    id: PropTypes.number.isRequired,
    buttonText: PropTypes.string.isRequired,
    CssClassName: PropTypes.string
}

Button.defaultProps = {
    placeholder: 'Type your answer here...',
    rows: 5
}

export default Button