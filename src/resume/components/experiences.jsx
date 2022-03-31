import React, { Component } from 'react';

class Experiences extends Component {

    getExperiences = () => {
        const { experiences } = this.props
        if(experiences.length > 0) {
            return experiences.map(e => 
                <div key={ e.id }>{ e.title }</div>
            )
        } else return (
            <div className="text-center small text-secondary fst-italic p-3">This section is empty and won’t appear in your resume.</div>
        )
    }

    render() { 
        return (
            <>
                <h5>Experiences</h5>
                <div>
                    { this.getExperiences() }
                </div>
            </>
        );
    }
}

export default Experiences;