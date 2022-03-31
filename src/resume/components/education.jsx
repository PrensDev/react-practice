import React, { Component } from 'react';

class Education extends Component {

    getEducation = () => {
        const { education } = this.props;
        if(education.length > 0) {
            return education.map(e => 
                <div key={e.id}>{e.school}</div>
            )
        } else return (
            <div className="text-center small text-secondary fst-italic p-3">This section is empty and won’t appear in your resume.</div>
        )
    }

    render() { 
        return (
            <>
                <h5>Education</h5>
                { this.getEducation() }
            </>
        );
    }
}

export default Education;