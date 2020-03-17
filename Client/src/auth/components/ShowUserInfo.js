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
                console.log(response.data.profile);
                this.props.setProfile(response.data.profile);
            })
            .catch((error) => {
                console.log('API ERROR:', error);
            });
    }
    render() {
        // let allProfile = <h4>No Profile!</h4>;
        // if (this.props.profile.length > 0) {
        //     allProfile = this.props.profile.map((profile, index) => {
        //         return (
        //             <main key={index}>
        //                 <div className="inner">
        //                     <h1>{profile.firstName}</h1>
        //                     <h1>{profile.lastName}</h1>
        //                     <h2>{profile.label}</h2>
        //                     <ul>
        //                         <li>{profile.email}</li>
        //                         <li>{profile.phone}</li>
        //                     </ul>
        //                 </div>
        //             </main>);
        //     });
        // }

        return (
            <>
                {/* <h3>All Profile</h3> */}
                {/* {allProfile} */}
                <main >
                    <div className="inner">
                        <h1>{this.props.profile.firstName}</h1>
                        <h1>{this.props.profile.lastName}</h1>
                        <h2>{this.props.profile.label}</h2>
                        <ul>
                            <li>{this.props.profile.email}</li>
                            <li>{this.props.profile.phone}</li>
                        </ul>
                    </div>
                </main>
            </>
        );
    }
}

export default withRouter(ShowUserInfo);
