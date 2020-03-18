import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../apiAuth'
import messages from '../messages'
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
    const { company, position, website, startDate, endDate, summary } = this.state.work
    const { organization, position, website, startDate, endDate, summary } = this.state.volunteer
    const { institution, major, studyType, startDate, endDate, gpa, Number, summary } = this.state.education
    const { name, level } = this.state.skills
    const { language, fluency } = this.state.languages
    return (
        <div>
          <form>
            <h3>Work Expirance</h3>
            <label htmlFor="company">Company Name</label>
            <input
              type="company"
              name="company"
              value={work.company}
              placeholder="company"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="position">position Name</label>
            <input
              type="position"
              name="position"
              value={work.position}
              placeholder="position"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="website">website Name</label>
            <input
              type="website"
              name="website"
              value={work.website}
              placeholder="website"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="startDate">start Date</label>
            <input
              type="startDate"
              name="startDate"
              value={work.startDate}
              placeholder="startDate"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="endDate">end Date</label>
            <input
              type="endDate"
              name="endDate"
              value={work.endDate}
              placeholder="endDate"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="summary">summary</label>
            <input
              type="summary"
              name="summary"
              value={work.summary}
              placeholder="summary"
              onChange={this.handleChange}
            />
            <br/>
            <hr/>
            <h3>Volunteer:</h3>
            <label htmlFor="company">Company Name</label>
            <input
              type="company"
              name="company"
              value={volunteer.company}
              placeholder="company"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="position">position Name</label>
            <input
              type="position"
              name="position"
              value={volunteer.position}
              placeholder="position"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="website">website Name</label>
            <input
              type="website"
              name="website"
              value={volunteer.website}
              placeholder="website"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="startDate">start Date</label>
            <input
              type="startDate"
              name="startDate"
              value={volunteer.startDate}
              placeholder="startDate"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="endDate">end Date</label>
            <input
              type="endDate"
              name="endDate"
              value={volunteer.endDate}
              placeholder="endDate"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="summary">summary</label>
            <input
              type="summary"
              name="summary"
              value={volunteer.summary}
              placeholder="summary"
              onChange={this.handleChange}
            />
            <br/>
            <hr />
            <h3>Education:</h3>
            <label htmlFor="institution">institution</label>
            <input
              type="institution"
              name="institution"
              value={education.institution}
              placeholder="institution"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="major">major</label>
            <input
              type="major"
              name="major"
              value={education.major}
              placeholder="major"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="studyType">study Type</label>
            <input
              type="studyType"
              name="studyType"
              value={education.studyType}
              placeholder="studyType"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="startDate">start Date</label>
            <input
              type="startDate"
              name="startDate"
              value={education.startDate}
              placeholder="startDate"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="endDate">end Date</label>
            <input
              type="endDate"
              name="endDate"
              value={education.endDate}
              placeholder="endDate"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="gpa">gpa</label>
            <input
              type="gpa"
              name="gpa"
              value={education.gpa}
              placeholder="gpa"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="summary">summary</label>
            <input
              type="summary"
              name="summary"
              value={education.summary}
              placeholder="summary"
              onChange={this.handleChange}
            />
            <br/>
            <label>Skills:</label>
            <label htmlFor="name">skills Name</label>
            <input
              type="name"
              name="name"
              value={skills.name}
              placeholder="skills Name"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="level">skills level</label>
            <input
              type="level"
              name="level"
              value={skills.level}
              placeholder="skills level"
              onChange={this.handleChange}
            />
            <br/>
            <hr/>
            <h3>Languages</h3>
            <label htmlFor="languages">languages</label>
            <input
              type="languages"
              name="languages"
              value={languages.languages}
              placeholder="languages"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="fluency">fluency</label>
            <input
              type="fluency"
              name="fluency"
              value={languages.fluency}
              placeholder="fluency"
              onChange={this.handleChange}
            />
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
    )
  }
}
export default withRouter(CreateNewResume)