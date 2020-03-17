import React from "react";
import { createArticleByApi } from "../ApiProfileCall";
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
    console.log(newProfile)
    createArticleByApi(newProfile)
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
        <form onSubmit={this.handleUserSubmit}>
          <label>Username</label>
          <input
            label="username"
            name="username"
            placeholder="Enter your Name"
            value={username}
            onChange={this.handleUserChange}
            autoFocus={true}
          />
          <label>Label:</label>
          <input
            label="label"
            name="label"
            placeholder="Enter your Working Path"
            value={label}
            onChange={this.handleUserChange}
            autoFocus={true}
          />

          <label>Email:</label>
          <input
            label="email"
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChange={this.handleUserChange}
            autoFocus={true}
          />
          <label>Phone:</label>
          <input
            label="phone"
            placeholder="Enter Your Phone"
            name="phone"
            value={phone}
            onChange={this.handleUserChange}
            autoFocus={true}
          />

          <label>Website</label>
          <input
            label="website"
            placeholder="Enter Your Websites"
            name="website"
            value={website}
            onChange={this.handleUserChange}
            autoFocus={true}
          />

          <label>Summary</label>
          <input
            placeholder="Enter Your Professional Summary"
            label="summary"
            name="summary"
            value={summary}
            onChange={this.handleUserChange}
          />
          <label>Network</label>
          <input
            placeholder="Enter Your Network"
            label="network"
            name="network"
            value={network}
            onChange={this.handleUserChange}
          />

          <label>Url</label>
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
export default CreateProfile;
