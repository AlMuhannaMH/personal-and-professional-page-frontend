// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

// import { getProfile } from '../apiResume'
// // import messages from '../messages'

// class ShowAllResume extends Component {

//     componentDidMount() {
//         // console.log(this.props.match.params);
//         showUserInfo(this.props.match.params.username)
//             .then((response) => {
//                 this.props.setProfile(response.data.profile);
//             })
//             .catch((error) => {
//                 console.log('API ERROR:', error);
//             });
//     }
//     render() {
//         return (
//             <>
//                 {/* <h3>All Profile</h3> */}
//                 {/* {allProfile} */}
//                 <main >
//                     <div className="inner">
//                         <h1>{this.props.profile.firstName}</h1>
//                         <h1>{this.props.profile.lastName}</h1>
//                         <h2>{this.props.profile.label}</h2>
//                         <ul>
//                             <li>{this.props.profile.email}</li>
//                             <li>{this.props.profile.phone}</li>
//                         </ul>
//                     </div>
//                 </main>
//             </>
//         );
//     }
// }

// export default withRouter(ShowAllResume);
