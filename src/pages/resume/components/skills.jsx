import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Skills extends Component {
    
    getSkills = () => {
        const { skills } = this.props;

        if(!skills || skills.length === 0)
            return <div className="text-center small text-secondary fst-italic p-3">This section is empty and won’t appear in your resume.</div>
        else {
            const skillsElements = () => {
                return skills.map((s, i) =>
                    <span key={i}>
                        <span className="fw-bold" id={ s.id }>{ s.name }</span>
                        { i < skills.length-1 && <span className="text-secondary mx-2">&bull;</span> }
                    </span>
                )
            }
            return (
                <div className="d-flex justify-content-between align-items-start my-3">
                    <div className="">
                        <FontAwesomeIcon 
                            icon={ solid('check-double') } 
                            className="text-secondary me-2" 
                            fixedWidth
                        />
                    </div>
                    <div className="flex-grow-1">
                        { skillsElements() }
                    </div>
                </div>
            )
        }
    }

    render() { 
        return (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">Skills</h5>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary">
                            <FontAwesomeIcon icon={ solid('edit') } />
                        </button>
                    </div>
                </div>

                { this.getSkills() }
            </>
        );
    }
}

export default Skills;