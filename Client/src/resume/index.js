import React from 'react';
import Resumes from './components/resumes.js';

class Index extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Welcome to PPP!
          </p>
                </header>
                <Resumes resumes={this.state.resumes}
                    setResumes={this.setResumes} />
            </div>
        );
    }
}

export default Index;