import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextEntry extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userResponse: ''
        }

        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange(e){
        let userInputText = e.target.value;
        console.log(userInputText);
        this.setState({userResponse: userInputText});
    }

    render() {
        let { id, placeHolderText, CssClassName } = this.props;
        return (
            <textarea
                key={'text_entry_' + id}
                placeholder={placeHolderText}
                onChange={this.handleTextChange}
                className={CssClassName}
                rows={5}
            />
        )
    }
}

TextEntry.propTypes = {
    id: PropTypes.number.isRequired,
    placeHolderText: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    CssClassName: PropTypes.string
}

TextEntry.defaultProps = {
    placeholder: 'Type your answer here...',
    rows: 5
}

export default TextEntry