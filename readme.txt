us : "use strict"
itin : "for in"
iter : "for of"
ritar : "array revers order"

https://github.com/minwe/jetbrains-react

'use strict'

import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

class SimpleTooltip extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.update = this.update.bind(this)
    }

    update() {
        this.setState({})
    }

    render(){

        let {} = this.props;

        return (
            <div>
                <p ref='foo' data-tip='tooltip'></p>
                <button onClick={() => { ReactTooltip.show(this.refs.foo) }}>Text</button>
                <ReactTooltip />
            </div>
        )
    }
}

SimpleTooltip.propTypes = {

}

class App extends React.Component {
  componentWillMount() {
    this.setState({ tooltipVisible: false })
  }

  handleClick(e) {
    e && e.stopPropagation()
    console.log('handle click')
    this.setState({ tooltipVisible: !this.state.tooltipVisible})
  }

  hide() {
    console.log('hide')
    this.setState({ tooltipVisible: false })
  }

  render() {
    return (
      <div onClick={ () => { this.hide() } }>
        <button onClick={ (e) => { this.handleClick(e) } }>Click to show/hide</button>
         { this.state.tooltipVisible && <Tooltip /> }
      </div>
    )
  }
}

https://reactstrap.github.io/components/tooltips/

class Tooltip extends React.Component {
  render() {
     return (
      <h2>Tooltip visible</h2>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))

https://github.com/wwayne/react-tooltip/issues/40
https://github.com/wwayne/react-tooltip/issues/258
https://github.com/wwayne/react-tooltip/issues/130

export default SimpleTooltip

              /*<SimpleLink
                  navigationUrl="http://www.google.lk"
                  linkTitle="title"
                  linkText="View More..." />*/

                  /*<SimpleTooltip {...this.props} node={this.props.Id} data={this.props.linkText} />*/

                        /*<SimpleLink
                                    Id = "1"
                                    navigationUrl="http://www.google.lk"
                                    linkTitle="title"
                                    linkText="View Mor..." />

                                <SimpleLink
                                    Id = "2"
                                    navigationUrl="http://www.google.lk"
                                    linkTitle="title"
                                    linkText="View More..." />*/

              /*<TextEntry {...this.textConfig} />
              <Button {...this.saveButtonConfig} clickHandler={this.onSave} />
              <Button {...this.submitButtonConfig} clickHandler={this.onSubmit} />*/