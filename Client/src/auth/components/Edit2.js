// import React from "react";
// import Edit from "./Edit";

// export default class Edit2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       checkUpdate: false,
//       First: this.props.first,
//       last: this.props.last,
//       mail: this.props.mail
//     };
//   }

//   clickUpdateUser = event => {
//     event.preventDefault();

//     this.setState({
//       checkUpdate: true
//     });
//   };

//   updateThisUser = (newTital, newAuthor, newContent) => {
//     this.props.updateArticle(this.props.id, newTital, newAuthor, newContent);
//     console.log(" inside artical in clickUpdateArticle", newTital);
//     this.setState({
//       tital: newTital,
//       author: newAuthor,
//       content: newContent
//     });
//   };

//   render() {
//     let stateUpdate = "";
//     if (this.state.checkUpdate === true) {
//       stateUpdate = (
//         <Edit
//           first={this.state.first}
//           last={this.state.last}
//           mail={this.state.mail}
//           clickUpdateArticle={this.clickUpdateUser}
//           updateThisArtical={this.updateThisArtical}
//         />
//       );
//     }
//     return (
//       <div className="article">
//         <h2> {this.state.Name}</h2>
//         <sub> {this.state.last} </sub>
//         <p> {this.state.mail} </p>

//         <br></br>
//         <a href="#" onClick={this.clickUpdateUser}>
//           {" "}
//           Update{" "}
//         </a>
//         {stateUpdate}
//       </div>
//     );
//   }

//   updateUserInfo = (id, first, last, Email) => {
//     console.log(" the Artical id to updated , ", id, first, last, Email);

//     updateUser(id, first, last, Email)
//       .then(response => {
//         console.log("the response is ", response);
//         const User = this.props.user;
//         //  console.log(newArticleLIst)
//         this.props.setUser(User);
//       })
//       .catch(error => {
//         console.log(" API ERROR ", error);
//       });
//   };
// }
