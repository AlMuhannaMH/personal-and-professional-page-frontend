import React from 'react';

class Resume extends React.Component {
        // deleteArticle = (event) => {
        //     event.preventDefault();
        //     this.props.deleteArticle(this.props.id);
        // }
        render() {
                return (
                        <>
                                <h3>Work Expirance:</h3>
                                <label>Company Name: {this.props.workCompany} </label><br />
                                {/* <label>Position: {this.props.workPosition} </label><br />
                                <label>Website: {this.props.workWebsite} </label><br />
                                <label>Start Date: {this.props.workStartDate} </label><br />
                                <label>EndDate: {this.props.workEndDate} </label><br />
                                <label>Summary: {this.props.workSummary} </label><br />
                                <hr />
                                <h3>Volunteer:</h3>
                                <label>Organization: {this.props.volunteerOrganization} </label><br />
                                <label>Position: {this.props.volunteerPosition} </label><br />
                                <label>Website: {this.props.volunteerWebsite} </label><br />
                                <label>Start Date: {this.props.volunteerStartDate} </label><br />
                                <label>EndDate: {this.props.volunteerEndDate} </label><br />
                                <label>Summary: {this.props.volunteerSummary} </label><br />
                                <hr />
                                <h3>Education:</h3>
                                <label>Institution: {this.props.educationInstitution} </label><br />
                                <label>Major: {this.props.educationMajor} </label><br />
                                <label>Study Type: {this.props.educationStudyType} </label><br />
                                <label>Start Date: {this.props.educationStartDate} </label><br />
                                <label>EndDate: {this.props.educationEndDate} </label ><br />
                                <label>GPA: {this.props.content.educationGpa} </label><br />
                                <label>Summary: {this.props.educationSummary} </label><br />
                                <hr />
                                <label>Skills:</label>
                                <label>Name: {this.props.skillsName} </label><br />
                                <label>Level: {this.props.skillsLevel} </label><br />
                                <hr />
                                <h3>Languages:</h3>
                                <label>Language: {this.props.languageName} </label><br /> */}
                                <hr />
                        </>
                )
        }
}

export default Resume
