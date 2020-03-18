import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { addProfile } from '../apiResume'
// import messages from '../messages'

class CreateNewResume extends Component {
  constructor() {
    super()

    this.state = {
      work: [{
        workCompany: "",
        workPosition: "",
        workWebsite: "",
        workStartDate: "",
        workEndDate: "",
        workSummary: ""
      }],
      volunteer: [{
        volunteerOrganization: "",
        volunteerPosition: "",
        volunteerWebsite: "",
        volunteerStartDate: "",
        volunteerEndDate: "",
        volunteerSummary: "",
      }],
      education: [{
        educationInstitution: "",
        educationMajor: "",
        educationStudyType: "",
        educationStartDate: "",
        educationEndDate: "",
        educationGpa: "",
        educationSummary: ""
      }],
      skills: [{
        skillsName: "",
        skillsLevel: ""
      }],
      languages: [{
        languageName: "",
        languagesFluency: "",
      }],
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateNewResume = event => {
    event.preventDefault()
    // alert,  history, 
    const { setResume } = this.props
    console.log(this.state);

    addProfile(this.state)
      // .then(() => signIn(this.state))

      .then(res => {
        setResume(res.data.resume)
        console.log(res.data.resume);
      })
      // .then(() => alert(messages.signUpSuccess, 'success'))
      // .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({
          work: [{
            workCompany: "",
            workPosition: "",
            workWebsite: "",
            workStartDate: "",
            workEndDate: "",
            workSummary: ""
          }],
          volunteer: [{
            volunteerOrganization: "",
            volunteerPosition: "",
            volunteerWebsite: "",
            volunteerStartDate: "",
            volunteerEndDate: "",
            volunteerSummary: "",
          }],
          education: [{
            educationInstitution: "",
            educationMajor: "",
            educationStudyType: "",
            educationStartDate: "",
            educationEndDate: "",
            educationGpa: "",
            educationSummary: ""
          }],
          skills: [{
            skillsName: "",
            skillsLevel: ""
          }],
          languages: [{
            languageName: "",
            languagesFluency: "",
          }],
        })
        // alert(messages.signUpFailure, 'danger')
      })
  }

  render() {
    const {
      workCompany,
      workPosition,
      workWebsite,
      workStartDate,
      workEndDate,
      workSummary } = this.state.work
    const { volunteerOrganization,
      volunteerPosition,
      volunteerWebsite,
      volunteerStartDate,
      volunteerEndDate,
      volunteerSummary } = this.state.volunteer
    const { educationInstitution,
      educationMajor,
      educationStudyType,
      educationStartDate,
      educationEndDate,
      educationGpa,
      educationSummary } = this.state.education
    const { skillsName,
      skillsLevel } = this.state.skills
    const { languageName,
      languagesFluency } = this.state.languages

    return (
      <div>
        <form className='auth-form' onSubmit={this.onCreateNewResume}>
          <h3>Work Expirance</h3>
          <label htmlFor="workCompany">Company Name</label>
          <input
            type="text"
            name="workCompany"
            value={workCompany}
            placeholder="work Company"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="workPosition">position Name</label>
          <input
            type="text"
            name="workPosition"
            value={workPosition}
            placeholder="workPosition"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="workWebsite">website Name</label>
          <input
            type="text"
            name="workWebsite"
            value={workWebsite}
            placeholder="workWebsite"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="workStartDate">start Date</label>
          <input
            type="date"
            name="workStartDate"
            value={workStartDate}
            placeholder="workStartDate"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="workEndDate">end Date</label>
          <input
            type="date"
            name="workEndDate"
            value={workEndDate}
            placeholder="workEndDate"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="workSummary">summary</label>
          <input
            type="text"
            name="workSummary"
            value={workSummary}
            placeholder="workSummary"
            onChange={this.handleChange}
          />
          <br />
          <hr />
          <h3>Volunteer:</h3>
          <label htmlFor="volunteerOrganization">Company Name</label>
          <input
            type="text"
            name="volunteerOrganization"
            value={volunteerOrganization}
            placeholder="volunteerOrganization"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="volunteerPosition">position Name</label>
          <input
            type="text"
            name="volunteerPosition"
            value={volunteerPosition}
            placeholder="volunteerPosition"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="volunteerWebsite">website Name</label>
          <input
            type="text"
            name="volunteerWebsite"
            value={volunteerWebsite}
            placeholder="website"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="volunteerStartDate">start Date</label>
          <input
            type="date"
            name="volunteerStartDate"
            value={volunteerStartDate}
            placeholder="startDate"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="volunteerEndDate">end Date</label>
          <input
            type="date"
            name="volunteerEndDate"
            value={volunteerEndDate}
            placeholder="volunteerEndDate"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="volunteerSummary">summary</label>
          <input
            type="text"
            name="volunteerSummary"
            value={volunteerSummary}
            placeholder="volunteerSummary"
            onChange={this.handleChange}
          />
          <br />
          <hr />
          <h3>Education:</h3>
          <label htmlFor="educationInstitution">institution</label>
          <input
            type="text"
            name="educationInstitution"
            value={educationInstitution}
            placeholder="educationInstitution"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="educationMajor">major</label>
          <input
            type="text"
            name="educationMajor"
            value={educationMajor}
            placeholder="educationMajor"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="educationStudyType">study Type</label>
          <input
            type="text"
            name="educationStudyType"
            value={educationStudyType}
            placeholder="educationStudyType"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="educationStartDate">start Date</label>
          <input
            type="date"
            name="educationStartDate"
            value={educationStartDate}
            placeholder="educationStartDate"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="educationEndDate">end Date</label>
          <input
            type="date"
            name="educationEndDate"
            value={educationEndDate}
            placeholder="educationEndDate"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="educationEndDate">gpa</label>
          <input
            type="text"
            name="educationEndDate"
            value={educationGpa}
            placeholder="educationEndDate"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="educationSummary">summary</label>
          <input
            type="text"
            name="educationSummary"
            value={educationSummary}
            placeholder="educationSummary"
            onChange={this.handleChange}
          />
          <br />
          <label>Skills:</label>
          <label htmlFor="skillsName">skills Name</label>
          <input
            type="text"
            name="skillsName"
            value={skillsName}
            placeholder="skills Name"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="skillsLevel">skills level</label>
          <input
            type="text"
            name="skillsLevel"
            value={skillsLevel}
            placeholder="skills skillsLevel"
            onChange={this.handleChange}
          />
          <br />
          <hr />
          <h3>Languages</h3>
          <label htmlFor="languageName">languages</label>
          <input
            type="text"
            name="languageName"
            value={languageName}
            placeholder="languageName"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="languagesFluency">fluency</label>
          <input
            type="text"
            name="languagesFluency"
            value={languagesFluency}
            placeholder="languagesFluency"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateNewResume)
