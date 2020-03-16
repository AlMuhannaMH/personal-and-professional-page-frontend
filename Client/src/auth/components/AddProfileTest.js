import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Badge, Button } from "react-bootstrap";
class AddProfileTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Name: "",
        Label: "",
        Email: "",
        Phone: "",
        Website: "",
        Summary: "",
         Network: "", 
         Username: "", 
         Url: "" 
      }
    };
  }
  handleUserChange = event => {
    const { name, value } = event.target;
    this.setState({
      form: { ...this.state.form, [name]: value }
    });
  };
  handleUserSubmit = event => {
    event.preventDefault();
    const {
      Name,
      Label,
      Email,
      Phone,
      Website,
      Summary,
     Network, Username, Url 
    } = this.state.form;
    const { handleNewRow } = this.props;
    const newMaterial = {
      Userid: 1,
      Name,
      Label,
      Email,
      Phone,
      Website,
      Summary,
     Network, Username,
      Url 
    };
    handleNewRow(newMaterial);
    this.setState(this.state);
    this.props.history.push("/profile");
  };
  handleNewRow;
  render() {
    const {
      Name, Label, Email,Phone,Website, Summary,
      Profiles: [{ Network, Username, Url }]
    } = this.state.form;
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>
              <Badge variant="secondary">New Profile:</Badge>
            </h1>
            <br />
            <br />
            <Form onSubmit={this.handleUserSubmit}>
              <Form.Group controlId="nmro.MaterialCode">
              <Form.Label>Name:</Form.Label>
                <Form.Control
                  label="Name"
                  name="Name"
                  placeholder="Enter your Name"
                  value={Name}
                  onChange={this.handleUserChange}
                  autoFocus={true}
                />
                <Form.Label>Label:</Form.Label>
                <Form.Control
                  label="Label"
                  name="Label"
                  placeholder="Enter your Working Path"
                  value={Label}
                  onChange={this.handleUserChange}
                  autoFocus={true}
                />

                <Form.Label>Email:</Form.Label>
                <Form.Control
                  label="Email"
                  placeholder="Enter your Email"
                  name="Email"
                  value={Email}
                  onChange={this.handleUserChange}
                  autoFocus={true}
                />
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  label="Phone"
                  placeholder="Enter Your Phone"
                  name="Phone"
                  value={Phone}
                  onChange={this.handleUserChange}
                  autoFocus={true}
                />

<Form.Label>Website</Form.Label>
                <Form.Control
                  label="Websites"
                  placeholder="Enter Your Websites"
                  name="Website"
                  value={Website}
                  onChange={this.handleUserChange}
                  autoFocus={true}
                />
              </Form.Group>
              <Form.Group controlId="nmro.Description">
              
              </Form.Group>
              <Form.Group controlId="nmro.Quantity">
                <Form.Label>Summary</Form.Label>
                <Form.Control
                      placeholder="Enter Your Professional Summary"
                  label="id"
                  name="Summary"
                  value={Summary}
                  onChange={this.handleUserChange}
                />


<Form.Label>Network</Form.Label>
                <Form.Control
                      placeholder="Enter Your Network Name"
                  label="Network"
                  name="NetWork"
                  value={Network}
                  onChange={this.handleUserChange}
                />


<Form.Label>Url</Form.Label>
                <Form.Control
                      placeholder="Enter Your URL"
                  label="Url"
                  name="Url"
                  value={Url}
                  onChange={this.handleUserChange}
                />

<Form.Label>Username</Form.Label>
                <Form.Control
                      placeholder="Enter Your Username"
                  label="UserName"
                  name="UserName"
                  value={Username}
                  onChange={this.handleUserChange}
                /> 



{/* 
<Form.Label>netWork</Form.Label>
                <Form.Control
                      placeholder=""
                  label="NetWork"
                  name="netWork"
                  value={Profiles.Network}
                  onChange={this.handleUserChange}
                /> */}


              </Form.Group>
              <Button
                type="submit"
                content="Submit"
                disabled={!Name || !Email || !Label || !Website || !Phone  ||!Summary||!Network||!Username||!Url}
                variant="dark"
              >
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(AddProfileTest);
