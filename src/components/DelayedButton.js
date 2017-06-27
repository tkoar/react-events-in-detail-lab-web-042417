// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  constructor(props) {
    super()

    this.delay = props.delay
    this.onDelayedClick = props.onDelayedClick
  }


  eventHandler = (event) => {
    event.persist()
    setTimeout(() => {
      this.onDelayedClick(event)
    }, this.delay);
  }

  render() {
    return (
      <button onClick={this.eventHandler}>
        DelayedButton
      </button>
    )
  }
}


export default DelayedButton
