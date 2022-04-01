import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

class BasicInfo extends Component {
    
    getApplicantInfo = () => {
        const { applicant } = this.props;
        if(applicant) return (
                <h2 className="text-uppercase">{ applicant.first_name } { applicant.middle_name } { applicant.last_name }</h2>
            )
        else return (
            <h2 className="text-uppercase text-secondary">[Your Name]</h2>
        )
    }

    render() { 
        return (
            <> 
                <div className="d-flex justify-content-between">
                    <div>
                        { this.getApplicantInfo() }
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary">
                            <FontAwesomeIcon 
                                icon={ solid('edit') }
                            />
                        </button>
                    </div>
                </div>

                <div className="row">
                    
                    {/* Email */}
                    <div className="col-md-6">
                        <FontAwesomeIcon 
                            icon={ solid('envelope') } 
                            className="text-secondary mr-2"
                            fixedWidth 
                        />
                        <span>jetsunprincetorres@sample.com</span>
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6">
                        <FontAwesomeIcon 
                            icon={ solid('phone-alt') } 
                            className="text-secondary mr-2"
                            fixedWidth 
                        />
                        <span>09123456789</span>
                    </div>

                </div>
            </>
        );
    }
}

export default BasicInfo;