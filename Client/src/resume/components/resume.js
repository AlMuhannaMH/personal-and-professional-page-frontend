import React from 'react';
const Resume = props => {
    deleteArticle = (event) => {
        event.preventDefault();
        this.props.deleteArticle(this.props.id);
      }
    return (
        <div>
           <div>
            <form>
            <h3>Work Expirance:</h3>
            <label>
                Company Name:
                <input type="text" name="companyName" />
            </label><br/>
            <label>
                Position:
                <input type="text" name="position" />
            </label><br/>
            <label>
                Website:
                <input type="text" name="website" />
            </label><br/>
            <label>
                Start Date:
                <input type="date" name="startDate" />
            </label><br/>
            <label>
                EndDate:
                <input type="date" name="endDate" />
            </label><br/>
            <label>
                Summary:
                <input type="text" name="summary" />
            </label><br/>
            {/* <input type="submit" value="Submit" /> */}
            <hr/>
            <h3>Volunteer:</h3>
            <label>
                Organization:
                <input type="text" name="organization" />
            </label><br/>
            <label>
                Position:
                <input type="text" name="position" />
            </label><br/>
            <label>
                Website:
                <input type="text" name="website" />
            </label><br/>
            <label>
                Start Date:
                <input type="date" name="startDate" />
            </label><br/>
            <label>
                EndDate:
                <input type="date" name="endDate" />
            </label><br/>
            <label>
                Summary:
                <input type="text" name="summary" />
            </label><br/>
            {/* <input type="submit" value="Submit" /> */}
            <hr/>
            <h3>Education:</h3>
            <label>
                Institution:
                <input type="text" name="institution" />
            </label><br/>
            <label>
                Major:
                <input type="text" name="major" />
            </label><br/>
            <label>
                Study Type:
                <input type="text" name="studyType" />
            </label><br/>
            <label>
                Start Date:
                <input type="date" name="startDate" />
            </label><br/>
            <label>
                EndDate:
                <input type="date" name="endDate" />
            </label><br/>
            <label>
                GPA:
                <input type="number" name="gpa" />
            </label><br/>
            <label>
                Summary:
                <input type="text" name="summary" />
            </label><br/>
            {/* <input type="submit" value="Submit" /> */}
            <hr/>
            <h3>Awards:</h3>
            <label>
                Title:
                <input type="text" name="title" />
            </label><br/>
            <label>
                Date:
                <input type="date" name="date" />
            </label><br/>
            <label>
                Awarder:
                <input type="text" name="awarder" />
            </label><br/>
            <label>
                Summary:
                <input type="text" name="summary" />
            </label><br/>
            {/* <input type="submit" value="Submit" /> */}
            <hr/>
            <h3>Publications:</h3>
            <label>
                Name:
                <input type="text" name="name" />
            </label><br/>
            <label>
                Publisher:
                <input type="text" name="publisher" />
            </label><br/>
            <label>
                Release Date:
                <input type="date" name="releaseDate" />
            </label><br/>
            <label>
                Website:
                <input type="text" name="website" />
            </label><br/>
            <label>
                Summary:
                <input type="text" name="summary" />
            </label><br/>
            {/* <input type="submit" value="Submit" /> */}
            <hr/>
            <label>Skills:</label>
            <label>
                Name:
                <input type="text" name="name" />
            </label><br/>
            <label>
                Level:
                <input type="text" name="level" />
            </label><br/>
            {/* <input type="submit" value="Submit" /> */}
            <hr/>
            <h3>Languages:</h3>
            <label>
                Language:
                <input type="text" name="languages" />
            </label><br/>
            <label>
                Fluency:
                <input type="text" name="fluency" />
            </label><br/>
            {/* <input type="submit" value="Submit" /> */}
            <hr/>
            <h3>Interests:</h3>
            <label>
                Name:
                <input type="text" name="name" />
            </label><br/>
            <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
    )
};
export default Resume

import React from 'react';

class Article extends React.Component {
  deleteArticle = (event) => {
    event.preventDefault();
    this.props.deleteArticle(this.props.id);
  }

  render() {
    return (
      <div className="article">
        {/* Title & Content & Author */}
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>
          {this.props.content}
        </p>
        <a href="#" onClick={this.deleteArticle}>Delete</a>
      </div>
    );
  }
}

export default Article;

    