import React from 'react';
import StyleWrapper from "./UserDetails.style";
import axios from "axios";
import { USER_DETAILS } from "../../../Utils/urls"

class UserDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {},
        }
    }

    componentDidMount() {
         const { location } = this.props;
        let url = `${USER_DETAILS}/2`;
        
        if(location.state) {
            url = `${USER_DETAILS}/${location.state.id}`
        }
        axios.get(url)
        .then(response => {
        this.setState({ userDetails: response.data && response.data.data });
        })
        .catch(function(error) {
        console.log(error);
        });
    }

    render(){
        console.log(this.props.location.state);
        const { userDetails } = this.state;
        const { avatar = "", first_name = "", last_name= "", email="" } = userDetails || {};
        return(
            <StyleWrapper>
               <figure>
                   <img src={avatar} alt="profile-img" />
               </figure>
               <div className="user-detail">
                   <p><strong>First Name:</strong> {first_name}</p>
                   <p><strong>Last Name:</strong> {last_name}</p>
                   <p><strong>Email:</strong> {email}</p>
               </div>
            </StyleWrapper>
            
        );
    }
}

export default UserDetails;