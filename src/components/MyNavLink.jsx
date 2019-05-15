import React, {Component} from 'react'
import NavLink from "react-router-dom/es/NavLink";


export default class MyNavLink extends Component {

    render() {
        //将外部的所有属性传递给NavLink
        return(
            <NavLink {...this.props} activeClassName='activeClass'>
            </NavLink>
        )
    }
}