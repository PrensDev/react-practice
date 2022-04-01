import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

class Licenses extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">Licences & Certifications</h5>
                    <div>
                        <button className="btn btn-sm btn-primary">
                            <FontAwesomeIcon icon={ solid('plus') } />
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default Licenses;