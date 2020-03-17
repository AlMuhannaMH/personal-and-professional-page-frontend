import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../apiAuth'
import messages from '../messages'

class CreateNewResume extends Component {
  constructor() {
    super()

    this.state = {
      work: [{
        company: "",
        position: "",
        website: "",
        startDate: "",
        endDate: "",
        summary: "",
      }],
      volunteer: [{
        organization: "",
        position: "",
        website: "",
        startDate: "",
        endDate: "",
        summary: "",
      }],
      education: [{
        institution: "",
        major: "",
        studyType: "",
        startDate: "",
        endDate: "",
        gpa: 0,
        summary: "",
      }],
      skills: [{
        name: "",
        level: "",
      }],
      languages: [{
        language: "",
        fluency: ""
      }],
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateNewResume = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({
          work: [{
            company: "",
            position: "",
            website: "",
            startDate: "",
            endDate: "",
            summary: "",
          }],
          volunteer: [{
            organization: "",
            position: "",
            website: "",
            startDate: "",
            endDate: "",
            summary: "",
          }],
          education: [{
            institution: "",
            major: "",
            studyType: "",
            startDate: "",
            endDate: "",
            gpa: 0,
            summary: "",
          }],
          skills: [{
            name: "",
            level: "",
          }],
          languages: [{
            language: "",
            fluency: ""
          }],
        })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render() {
    const { company, position, website, startDate, endDate, summary } = this.state.work
    const { organization, position, website, startDate, endDate, summary } = this.state.volunteer
    const { institution, major, studyType, startDate, endDate, gpa, Number, summary } = this.state.education
    const { name, level } = this.state.skills
    const { language, fluency } = this.state.languages

    return (
      <div>
        <div>
          <form>
            <h3>Work Expirance:</h3>
            {/* <label>
              Company Name:
                <input type="text" name="companyName" />
            </label> */}
            <label htmlFor="company">Company Name:</label>
            <input
              required
              type="company"
              name="company"
              value={company}
              placeholder="company"
              onChange={this.handleChange}
            />
            <br />
            <label>
              Position:
                <input type="text" name="position" />
            </label><br />
            <label>
              Website:
                <input type="text" name="website" />
            </label><br />
            <label>
              Start Date:
                <input type="date" name="startDate" />
            </label><br />
            <label>
              EndDate:
                <input type="date" name="endDate" />
            </label><br />
            <label>
              Summary:
                <input type="text" name="summary" />
            </label><br />
            {/* <input type="submit" value="Submit" /> */}
            <hr />
            <h3>Volunteer:</h3>
            <label>
              Organization:
                <input type="text" name="organization" />
            </label><br />
            <label>
              Position:
                <input type="text" name="position" />
            </label><br />
            <label>
              Website:
                <input type="text" name="website" />
            </label><br />
            <label>
              Start Date:
                <input type="date" name="startDate" />
            </label><br />
            <label>
              EndDate:
                <input type="date" name="endDate" />
            </label><br />
            <label>
              Summary:
                <input type="text" name="summary" />
            </label><br />
            {/* <input type="submit" value="Submit" /> */}
            <hr />
            <h3>Education:</h3>
            <label>
              Institution:
                <input type="text" name="institution" />
            </label><br />
            <label>
              Major:
                <input type="text" name="major" />
            </label><br />
            <label>
              Study Type:
                <input type="text" name="studyType" />
            </label><br />
            <label>
              Start Date:
                <input type="date" name="startDate" />
            </label><br />
            <label>
              EndDate:
                <input type="date" name="endDate" />
            </label><br />
            <label>
              GPA:
                <input type="number" name="gpa" />
            </label><br />
            <label>
              Summary:
                <input type="text" name="summary" />
            </label><br />
            {/* <input type="submit" value="Submit" /> */}
            <hr />
            <h3>Awards:</h3>
            <label>
              Title:
                <input type="text" name="title" />
            </label><br />
            <label>
              Date:
                <input type="date" name="date" />
            </label><br />
            <label>
              Awarder:
                <input type="text" name="awarder" />
            </label><br />
            <label>
              Summary:
                <input type="text" name="summary" />
            </label><br />
            {/* <input type="submit" value="Submit" /> */}
            <hr />
            <h3>Publications:</h3>
            <label>
              Name:
                <input type="text" name="name" />
            </label><br />
            <label>
              Publisher:
                <input type="text" name="publisher" />
            </label><br />
            <label>
              Release Date:
                <input type="date" name="releaseDate" />
            </label><br />
            <label>
              Website:
                <input type="text" name="website" />
            </label><br />
            <label>
              Summary:
                <input type="text" name="summary" />
            </label><br />
            {/* <input type="submit" value="Submit" /> */}
            <hr />
            <label>Skills:</label>
            <label>
              Name:
                <input type="text" name="name" />
            </label><br />
            <label>
              Level:
                <input type="text" name="level" />
            </label><br />
            {/* <input type="submit" value="Submit" /> */}
            <hr />
            <h3>Languages:</h3>
            <label>
              Language:
                <input type="text" name="languages" />
            </label><br />
            <label>
              Fluency:
                <input type="text" name="fluency" />
            </label><br />
            {/* <input type="submit" value="Submit" /> */}
            <hr />
            <h3>Interests:</h3>
            <label>
              Name:
                <input type="text" name="name" />
            </label><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateNewResume)
