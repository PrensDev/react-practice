import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

class Licenses extends Component {

    getLicences = () => {
        const { licenses } = this.props || [];

        if(!licenses || licenses.length === 0)
            return (
                <div className="text-center small text-secondary fst-italic p-3">This section is empty and won’t appear in your resume.</div>
            )
        else
            return licenses.map((l, i) => 
                <div key={ i } className="d-flex justify-content-between my-3">
                    <div>
                        <FontAwesomeIcon icon={ solid('certificate') } className="text-secondary" />
                    </div>
                    <div className="flex-grow-1">
                        <div className="fw-bold">{ l.name }</div>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary">
                            <FontAwesomeIcon icon={ solid('edit') } />
                        </button>
                    </div>
                </div>
            )
    }

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

                <div>
                    { this.getLicences() }
                </div>
            </>
        );
    }
}

export default Licenses;