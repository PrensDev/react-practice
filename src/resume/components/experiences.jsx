import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

class Experiences extends Component {

    getExperiences = () => {
        const { experiences } = this.props || [];
        
        if(experiences && experiences.length > 0) {
            return experiences.map(e =>
                <div key={ e.id } className="d-flex justify-content-between align-items-start my-3">
                    <div>
                        <FontAwesomeIcon icon={ solid('file-alt') }  className="text-secondary" />
                    </div>
                    <div className="flex-grow-1">
                        <div className="fw-bold">{ e.title }</div>
                        <div>{ e.company }</div>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary">
                            <FontAwesomeIcon icon={ solid('edit') } />
                        </button>
                    </div>
                </div>
            )
        } else 
            return (
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