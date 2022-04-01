import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

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
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">Experiences</h5>
                    <div>
                        <button className="btn btn-sm btn-primary">
                            <FontAwesomeIcon icon={ solid('plus') } />
                        </button>
                    </div>
                </div>

                <div>
                    { this.getExperiences() }
                </div>
            </>
        );
    }
}

export default Experiences;