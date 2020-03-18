import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getResumes } from '../apiResume'
// import messages from '../messages'
class ShowAllResume extends Component {
   
    componentDidMount() {
        // console.log(this.props.match.params);
        getResumes()
            .then((response) => {
                console.log(response);
                console.log(response.data.resumes[0].workPosition);
                
                
                this.props.setResume(response.data);
            })
            .catch((error) => {
                console.log('API ERROR:', error);
            });
    
    }
    render() {
        
        return (
            <>
                {/* <h3>All Profile</h3> */}
                {/* {allProfile} */}
                <main >
                    <div className="inner">
                       {/* <ul> 
                           <h3>Work Expirence:</h3>
                        <li>{this.props.resume.work.workPosition}</li>
                        {this.props.resume.workPosition}
                        {this.props.resume.workWebsite}
                        <li>{this.props.resume.workStartDate}</li> 
                        <li>{this.props.resume.workEndDate}</li>
                        <li>{this.props.resume.workSummary}</li>
                        <li>{this.props.resume.volunteerOrganization}</li>
                        </ul>
                        <hr/>
                        <ul> 
                            <h3>Volunteer:</h3>
                        <li>{this.props.resume.volunteerPosition}</li>
                        {this.props.resume.volunteerWebsite}
                        {this.props.resume.volunteerStartDate}
                        <li>{this.props.resume.volunteerEndDate}</li> 
                        <li>{this.props.resume.volunteerSummary}</li>
                        </ul>
                        <hr/>
                        
                               
                                   <h3>Education :</h3>
                       
                        <ul> 
                        <li>{this.props.resume.educationInstitution}</li>
                       <li> {this.props.resume.educationMajor}</li>
                        {this.props.resume.workWebsite}
                        <li>{this.props.resume.educationStudyType}</li> 
                        <li>{this.props.resume.educationStartDate}</li>
                        <li>{this.props.resume.educationEndDate}</li>
                        <li>{this.props.resume.educationGpa}</li>
                        <li>{this.props.resume.educationSummary}</li>
                        </ul>
                        <hr/>
                        <ul> 
                                <h3>Skills:</h3>
                        <li>{this.props.resume.skillsName}</li>
                       <li> {this.props.resume.skillsLevel}</li> 
                       <hr/>
                     
                     
                       <ul/>
                               <h3>languages:</h3>
                     <li>{this.props.resume.languageName}</li>
                    <li>  {this.props.resume.languagesFluency}</li>
                      
                      
                     
                       <ul/>
                        </ul> */}
                         <h3>Education :</h3>
                    </div>
                </main>
            </>
        );
    }
}
export default withRouter(ShowAllResume);