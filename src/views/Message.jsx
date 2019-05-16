import React, {Component} from 'react'
import {Route} from "react-router-dom";

import MsgDetail from './message-detail'
import MyNavLink from '../components/MyNavLink'

export default class Message extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        //模拟ajax请求异步获取数据
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message001'},
                {id: 2, title: 'message002'},
                {id: 3, title: 'message003'}
            ]

            this.setState({messages})
        }, 500)
    }

    showDetailByPush = (id) => {
        this.props.history.push(`/home/message/detail/${id}`)
    }
    showDetailByReplace = (id) => {
        this.props.history.replace(`/home/message/detail/${id}`)
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((message, index) => (
                            <li key={index}>
                                {/*<a href={`/home/message/detail/${message.id}`}>{message.title}</a>*/}
                                <MyNavLink to={`/home/message/detail/${message.id}`}>{message.title}</MyNavLink>
                                &nbsp;&nbsp;
                                <button className='btn btn-info' onClick={() => this.showDetailByPush(message.id)}>查看</button>
                                &nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={() => this.showDetailByReplace(message.id)}>查看</button>
                            </li>
                        ))
                    }
                </ul>
                <Route path='/home/message/detail/:id' component={MsgDetail}/>
            </div>
        )
    }
}