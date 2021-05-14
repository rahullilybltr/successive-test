import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyle from "./Navigation.style";

class Navigation extends React.Component{
    render(){
        return(
            <HeaderStyle className="header">
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to='/' >User List</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to='/user-details' >User Profile</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to='/form' >Form</NavLink>
                    </li>
                </ul>
            </HeaderStyle>
            
        );
    }
}

export default Navigation;