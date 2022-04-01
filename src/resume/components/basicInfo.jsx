import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import $ from'jquery';
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';

class BasicInfo extends Component {
    
    getApplicantName = () => {
        const { applicant } = this.props;
        return applicant
            ? <h2 className="text-uppercase">{ applicant.first_name } { applicant.middle_name } { applicant.last_name }</h2>
            : <h2 className="text-uppercase text-secondary">[Your Full Name]</h2>
    }

    getApplicantEmail = () => {
        const { email } = this.props.applicant || false;
        return email 
            ? <span>{ email }</span> 
            : <span className="text-secondary">[Your email will appear here]</span>
    }

    getApplicantContactNumber = () => {
        const { contact_number } = this.props.applicant || false;
        return contact_number
            ? <span>{ contact_number }</span>
            : <span className="text-secondary">[Your contact number will appear here]</span>
    }

    editApplicantInfo = () => {
        var modal = new bootstrapBundleMin.Modal(document.getElementById('updateBasicInfo-Modal'));
        modal.show();
    }

    render() { 
        return (
            <> 
                <div className="d-flex justify-content-between">

                    {/* Applicant Name */}
                    <div>
                        { this.getApplicantName() }
                    </div>

                    {/* Edit Applicant Info */}
                    <div>
                        <button className="btn btn-sm btn-outline-secondary" onClick={ this.editApplicantInfo }>
                            <FontAwesomeIcon icon={ solid('edit') } />
                        </button>
                    </div>
                </div>

                <div className="row">
                    
                    {/* Email */}
                    <div className="col-md-6">
                        <FontAwesomeIcon icon={ solid('envelope') } className="text-secondary mr-2" fixedWidth />
                        { this.getApplicantEmail() }
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6">
                        <FontAwesomeIcon icon={ solid('phone-alt') } className="text-secondary mr-2"fixedWidth />
                        { this.getApplicantContactNumber() }
                    </div>

                </div>
            </>
        );
    }
}

export default BasicInfo;