import React, { Component } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import {connect} from 'react-redux';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
          }
        this.ws = new WebSocket(`ws://localhost:3030`)
    }
  componentDidMount() {
      console.log(`OMGOGOMGOMG: ${JSON.stringify(this.state.auth)}`);
    this.ws.onopen = () => {
      console.log('react ws connected')
    }

    this.ws.onmessage = evt => {
      this.addMessage(JSON.parse(evt.data))
    }

    this.ws.onclose = () => {
        this.ws.close(`end of socket`);
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    const message = { message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render() {
    return (
      <div>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        {this.state.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={this.props.auth.name}
          />,
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Chat);