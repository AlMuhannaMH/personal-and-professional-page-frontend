import React from "react";
export default class AddProfile extends React.Component {
  // Setting constructor to hold the article object's value to be added
  constructor(props) {

    super(props);
    this.state = {
      Name: '',
      Label: '',
  
      Email: "",
      Phone: "",
      Website: "",
      Summary: "",
     Profiles: [{ Network: "", Username: "", Url: "" }]
    };
    this.handleChange = this.handleChange.bind(this);
  }
// Passing the Profile object to the parent
submitHandler = e => {
     e.preventDefault();
        const  { Name,Label ,Email, Phone, Website,Summary,Profiles} = this.state;

        // Create new Profile with the data from user input.
const newProfile = 
 { Name, Label ,Email, Phone, Website,Summary,Profiles };
         if (this.props.id) {
         this.props.addProfile(newProfile);
         console.log(newProfile);
        }
    };
  
  handleChange (evt) {
 this.setState({ [evt.target.name]: evt.target.value });
      }
      
   
  render() {
    return (
        
      <>
        <div onSubmit={this.submitHandler}></div>
        <h3>Add Profile</h3>
        <label>Name:</label>
        <input
          className="Name"
          onChange={this.handleChange}
                   // value={this.state.Name}
                   />

        <label>Label:</label>
        <input className="Label"
                  onChange={this.handleChange}
           // value={this.state.handleLabelChange}
           />

        <label >Email:</label>
             <input className="Email" 
   onChange={this.handleChange}
               //value={this.state.Email} 
               />



        <label>Phone</label>
        <input className="Phone"
   onChange={this.handleChange}
           //  value={this.state.Phone}
        />
         <label>Website</label>
        <input className="Website"
   onChange={this.handleChange}          
  // value={this.state.Website}
        />


          <label>Website</label>
        <input className="Websites"
        onChange={this.handleChange}
        //  value={this.state.Website}
        />


        <label>Profile:</label>
        <input className="Profile"
        onChange={this.handleChange}
       //   value={this.state.Profiles}
        />


        <button  onClick={this.props.addProfile} >Add Profile!</button>
 

       
      </>
    );
  }
}
