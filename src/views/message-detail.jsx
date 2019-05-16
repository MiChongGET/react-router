import React, {Component} from 'react'

export default class MessageDetail extends Component {

    state = {
        msg_detail: [
            {id: 1, title: 'msg1', content: 'java'},
            {id: 2, title: 'msg2', content: 'python'},
            {id: 3, title: 'msg3', content: 'html'}
        ]
    }

    render() {

        const {id} = this.props.match.params
        console.log('id:' + id)
        const message = this.state.msg_detail.find((m) => m.id === id * 1)
        console.log(message)


        return (
            <div>
                <ul>
                    <li>ID:{message.id}</li>
                    <li>TITLE:{message.title}</li>
                    <li>CONTENT:{message.content}</li>
                </ul>

            </div>
        )
    }
}