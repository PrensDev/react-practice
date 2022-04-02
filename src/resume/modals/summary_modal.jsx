import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Summary_Modal extends Component {
    validateForm = (e) => {
        e.preventDefault();
        alert('Submitted')
    }

    render() { 
        return (
            <div className="modal" id="updateSummary-Modal">
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <form className="modal-content" id="updateSummary-Form" onSubmit={ this.validateForm }>
                        
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <FontAwesomeIcon icon={ solid('pen') } className="text-secondary" fixedWidth />
                                <span>Edit your resume summary</span>
                            </h5>
                            <button type="button" className="btn btn-light btn-sm" data-bs-dismiss="modal">
                                <FontAwesomeIcon icon={ solid('times') } />
                            </button>
                        </div>
                        
                        <div className="modal-body">
                            <p className="fw-bold">Please fill up the following required fields:</p>

                            {/* Summary Field */}
                            <div className="mb-3">
                                <label htmlFor="summary" className="fw-bold">
                                    <span>Summary</span>
                                    <span className="text-danger">*</span>
                                </label>
                                <textarea className="form-control" id="summary" name="summary" rows="8" placeholder="Briefly describe about yourself here ..."></textarea>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">
                                <span>Cancel</span>
                            </button>
                            <button type="submit" className="btn btn-primary">
                                <span>Save</span>
                                <FontAwesomeIcon icon={ solid('check') } fixedWidth />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Summary_Modal;