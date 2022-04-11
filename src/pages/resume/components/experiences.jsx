import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import $ from 'jquery'
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';

class Experiences extends Component {

    getExperiences = () => {
        const { experiences } = this.props || [];

        return (!experiences || experiences.length === 0) 
            ? <div className="text-center small text-secondary fst-italic p-3">This section is empty and won’t appear in your resume.</div>
            : experiences.map(e =>
                <div key={ e.id } className="d-flex justify-content-between align-items-start my-3">
                    <div>
                        <FontAwesomeIcon 
                            icon={ solid('file-alt') }  
                            className="text-secondary me-2" 
                            fixedWidth
                        />
                    </div>
                    <div className="flex-grow-1">
                        <div className="fw-bold">{ e.title }</div>
                        <div>{ e.company }</div>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary" onClick={ () => this.editExperience(e.id) }>
                            <FontAwesomeIcon icon={ solid('edit') } />
                        </button>
                    </div>
                </div>
            )
    }

    addExperience = () => {
        var modal = new bootstrapBundleMin.Modal($('#addExperience-Modal'));
        modal.show();
    }

    
    editExperience = (id) => {
        var modal = new bootstrapBundleMin.Modal($('#editExperience-Modal'));
        modal.show();
    }

    render() { 
        return (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">Experiences</h5>
                    <div>
                        <button className="btn btn-sm btn-primary" onClick={ this.addExperience }>
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