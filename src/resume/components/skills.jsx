import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Skills extends Component {
    
    getSkills = () => {
        const { skills } = this.props;
        if(skills.length > 0) {
            return skills.map((s, i) =>
                <span key={i}>
                    <span id={ s.id }>{ s.name }</span>
                    { i < skills.length-1 && <span className="mx-2">&bull;</span> }
                </span>
            )
        } else return (
            <div className="text-center small text-secondary fst-italic p-3">This section is empty and won’t appear in your resume.</div>
        )
    }

    render() { 
        return (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">Skills</h5>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary">
                            <FontAwesomeIcon 
                                icon={ solid('edit') } 
                            />
                        </button>
                    </div>
                </div>

                <div>
                    { this.getSkills() }
                </div>
            </>
        );
    }
}

export default Skills;