import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class BasicInfo extends Component {
    getApplicantInfo = () => {
        const { applicant } = this.props;
        if(applicant) return (
                <h2 class="text-uppercase">{ applicant.first_name } { applicant.middle_name } { applicant.last_name }</h2>
            )
        else return (
            <h2 class="text-uppercase text-secondary">[Your Name]</h2>
        )
    }

    render() { 
        return (
            <>
                { this.getApplicantInfo() }

                <div className="row">
                    {/* Email */}
                    <div className="col-md-6">
                        <FontAwesomeIcon icon="envelope"/>
                        <span className="ml-1">jetsunprincetorres@sample.com</span>
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6">
                        <FontAwesomeIcon icon="envelope"/>
                        <span className="ml-1">09123456789</span>
                    </div>
                </div>
            </>
        );
    }
}

export default BasicInfo;