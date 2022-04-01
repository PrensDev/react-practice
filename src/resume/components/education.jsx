import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Education extends Component {

    getEducation = () => {
        const { education } = this.props;
        if(education.length > 0) {
            return education.map((e, i) => 
                <div className="d-flex align-items-start my-3" key={ i }>
                    <div>
                        <FontAwesomeIcon icon={ solid('graduation-cap') } className="text-secondary" />
                    </div>
                    <div className="flex-grow-1">
                        <div key={ e.id } className="fw-bold">{ e.school }</div>
                        { e.degree && <div>{ e.degree }</div> }
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary">
                            <FontAwesomeIcon icon={ solid('edit') } />
                        </button>
                    </div>
                </div>
            )
        } else return (
            <div className="text-center small text-secondary fst-italic p-3">This section is empty and won’t appear in your resume.</div>
        )
    }

    render() { 
        return (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">Education</h5>
                    <div>
                        <button className="btn btn-sm btn-primary">
                            <FontAwesomeIcon icon={ solid('plus') } />
                        </button>
                    </div>
                </div>

                { this.getEducation() }
            </>
        );
    }
}

export default Education;