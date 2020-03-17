import React from "react";
import { createArticleByApi } from "../api";
class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        label: "",
        email: "",
        phone: "",
        website: "",
        summary: "",
        network: "",
        url: ""
      }
    };
  }
  handleUserChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };
  handleUserSubmit = event => {
    event.preventDefault();
    const {
      username,
      label,
      email,
      phone,
      website,
      summary,
      network,
      url
    } = this.state.form;
    const { handleNewRow } = this.props;
    const newProfile = {
      username,
      label,
      email,
      phone,
      website,
      summary,
      network,
      url
    };
    createProfileByApi(newProfile)
      .then(response => {
        handleNewRow(newProfile);
        console.log("ok", response);
        this.setState(this.state);
      })
      .catch(error => console.log("API ERROR:", error));
  };
  render() {
    const {
      username,
      label,
      email,
      phone,
      website,
      summary,
      network,
      url
    } = this.state.form;
    return (
      <div>
        {/* <h3>Create Profile</h3>
                <br /><br />
                <form onSubmit={this.handleUserSubmit}>
                    <label>Name:</label>
                    <input label="title"
                        placeholder=""
                        name="title"
                        value={title}
                        onChange={this.handleUserChange}
                        autoFocus={true} />
                    <label>author</label>
                    <input
                        label="author"
                        name="author"
                        value={author}
                        onChange={this.handleUserChange} />
                    <label>content</label>
                    <input label="content"
                        name="content"
                        value={content}
                        onChange={this.handleUserChange} />
                    <button type="submit" content="Submit" >Create</button>
                </form>
                <br /><br /> */}

        <form onSubmit={this.handleUserSubmit}>
          <lable>Username</lable>
          <input
            label="username"
            name="username"
            placeholder="Enter your Name"
            value={username}
            onChange={this.handleUserChange}
            autoFocus={true}
          />
          <lable>Label:</lable>
          <input
            label="label"
            name="label"
            placeholder="Enter your Working Path"
            value={label}
            onChange={this.handleUserChange}
            autoFocus={true}
          />

          <lable>Email:</lable>
          <input
            label="email"
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChange={this.handleUserChange}
            autoFocus={true}
          />
          <lable>Phone:</lable>
          <input
            label="phone"
            placeholder="Enter Your Phone"
            name="phone"
            value={phone}
            onChange={this.handleUserChange}
            autoFocus={true}
          />

          <lable>Website</lable>
          <input
            label="website"
            placeholder="Enter Your Websites"
            name="website"
            value={website}
            onChange={this.handleUserChange}
            autoFocus={true}
          />

          <lable>Summary</lable>
          <input
            placeholder="Enter Your Professional Summary"
            label="summary"
            name="summary"
            value={summary}
            onChange={this.handleUserChange}
          />

          <lable>Network</lable>
          <input
            placeholder="Enter Your Network Name"
            label="network"
            name="netWork"
            value={network}
            onChange={this.handleUserChange}
          />

          <lable>Url</lable>
          <input
            placeholder="Enter Your URL"
            label="url"
            name="url"
            value={url}
            onChange={this.handleUserChange}
          />

          <button type="submit" content="Submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}
export default createProfile;
