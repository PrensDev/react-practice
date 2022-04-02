import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Education_Modal extends Component {
    render() { 
        return (
            <>
                {/* Add Education Moda */}
                <div className="modal" id="addEducation-Modal">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                        <form className="modal-content" id="addExperience-Form" onSubmit={ this.validateForm }>
                            
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    <FontAwesomeIcon icon={ solid('file-alt') } className="text-secondary" fixedWidth />
                                    <span>Add experience</span>
                                </h5>
                                <button type="button" className="btn btn-light btn-sm" data-bs-dismiss="modal">
                                    <FontAwesomeIcon icon={ solid('times') } />
                                </button>
                            </div>
                            
                            <div className="modal-body">
                                <p className="fw-bold">Please fill up the following required fields:</p>

                                {/* Title */}
                                <div className="mb-3">
                                    <label htmlFor="addExperience_title" className="fw-bold">
                                        <span>Title</span>
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="addExperience_title" 
                                        name="title" 
                                        placeholder="Insert title here" 
                                    />
                                </div>

                                {/* Company */}
                                <div className="mb-3">
                                    <label htmlFor="addExperience_company" className="fw-bold">
                                        <span>Company</span>
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="addExperience_company" 
                                        name="company" 
                                        placeholder="Insert company here" 
                                    />
                                </div>

                                {/* Month and Year Started */}
                                <div className="row g-2 mb-3">
                                    
                                    {/* Start Month */}
                                    <div className="col-md-6">
                                        <label htmlFor="addExperience_startMonth" className="fw-bold">
                                            <span>Month started</span>
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input 
                                            type="date" 
                                            className="form-control" 
                                            id="addExperience_startMonth" 
                                            name="start" 
                                            placeholder="Select start mpnth here" 
                                        />
                                    </div>

                                    {/* Start Year */}
                                    <div className="col-md-6">
                                        <label htmlFor="addExperience_startYear" className="fw-bold">
                                            <span>Year started</span>
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input 
                                            type="year" 
                                            className="form-control" 
                                            id="addExperience_startYear" 
                                            name="company" 
                                            placeholder="Select end date here" 
                                        />
                                    </div>
                                </div>

                                {/* Month and Year Ended */}
                                <div className="row g-2 mb-3">
                                    
                                    {/* End Month */}
                                    <div className="col-md-6">
                                        <label htmlFor="addExperience_endMonth" className="fw-bold">
                                            <span>Month ended</span>
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input 
                                            type="date" 
                                            className="form-control" 
                                            id="addExperience_endMonth" 
                                            name="start" 
                                            placeholder="Select start month here" 
                                        />
                                    </div>

                                    {/* End Year */}
                                    <div className="col-md-6">
                                        <label htmlFor="addExperience_endYear" className="fw-bold">
                                            <span>Year ended</span>
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input 
                                            type="year" 
                                            className="form-control" 
                                            id="addExperience_endYear" 
                                            name="company" 
                                            placeholder="Select start year here" 
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="addExperience_description" className="fw-bold">
                                        <span>Description</span>
                                    </label>
                                    <textarea 
                                        className="form-control"
                                        name="description" 
                                        id="addExperience_description" 
                                        rows="5"
                                        placeholder="Type a brief description here ..."
                                    ></textarea>
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

                {/* Edit Education Modal */}
                <div className="modal" id="editEducation-Modal">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                        <form className="modal-content" id="editExperience-Form" onSubmit={ this.validateForm }>
                            
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    <FontAwesomeIcon icon={ solid('pen') } className="text-secondary" fixedWidth />
                                    <span>Edit your basic information</span>
                                </h5>
                                <button type="button" className="btn btn-light btn-sm" data-bs-dismiss="modal">
                                    <FontAwesomeIcon icon={ solid('times') } />
                                </button>
                            </div>
                            
                            <div className="modal-body">
                                <p className="fw-bold">Please fill up the following required fields:</p>

                                {/* Applicant Name */}
                                <div className="row g-2 mb-3">
                                    
                                    {/* First Name */}
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="firstName" className="fw-bold">
                                                <span>First name</span>
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" id="firstName" name="firstName" className="form-control" placeholder="ex. Juan" />
                                        </div>
                                    </div>

                                    {/* Middle Name */}
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="middleName" className="fw-bold">
                                                <span>Middle name</span>
                                            </label>
                                            <input type="text" id="middleName" name="middleName" className="form-control" placeholder="ex. Pedro" />
                                        </div>
                                    </div>

                                    {/* Last Name */}
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="lastName" className="fw-bold">
                                                <span>Last name</span>
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" id="lastName" name="lastName" className="form-control" placeholder="ex. Dela Cruz" />
                                        </div>
                                    </div>
                                    
                                    {/* Suffix/Extension Name */}
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="lastName" className="fw-bold">
                                                <span>Suffix/Extension name</span>
                                            </label>
                                            <input type="text" id="lastName" name="lastName" className="form-control" placeholder="ex. Jr." />
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="fw-bold">
                                        <span>Email</span>
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="ex. juandelacruz@email.com" />
                                </div>

                                {/* Contact Number */}
                                <div className="mb-3">
                                    <label htmlFor="contactNumber" className="fw-bold">
                                        <span>Contact Number</span>
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="contactNumber" className="form-control" id="contactNumber" name="contactNumber" placeholder="ex. (123) 456-7890" />
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
            </>
        );
    }
}

export default Education_Modal;