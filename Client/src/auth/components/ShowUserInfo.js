import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { showUserInfo } from '../apiAuth'
// import messages from '../messages'

class ShowUserInfo extends Component {

    componentDidMount() {
        // console.log(this.props.match.params);
        showUserInfo(this.props.match.params.username)
            .then((response) => {
                console.log(response);

                this.props.setProfile(response.data.profile);
            })
            .catch((error) => {
                console.log('API ERROR:', error);
            });
    }
    render() {
        return (
            <>
                {/* <h3>All Profile</h3> */}
                {/* {allProfile} */}
                <main className="mainIfo" >
                    <div className="inner">
                        <img class="rounded" src={"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"} alt="Image" /> 
                        <ul class="list-group">
                        <li class="list-group-item" >First Name:  {this.props.profile.firstName}</li>
                        <li class="list-group-item">Last Name:  {this.props.profile.lastName}</li>
                        <li class="list-group-item">Label:  {this.props.profile.label}</li>
                        <li class="list-group-item">Email: {this.props.profile.email}</li>
                        <li class="list-group-item">Phone:  {this.props.profile.phone}</li>
                        </ul>
                    </div>
                </main>
            </>
        );
    }
}

export default withRouter(ShowUserInfo);
