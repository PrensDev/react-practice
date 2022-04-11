import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Modal, Button } from 'react-bootstrap';
import FormGroup from '../../../main_components/formGroup';

class BasicInfoModal extends Component {
    onHideModal = (formikProps) => {
        formikProps.resetForm();
        this.props.hideModal({ basicInfo: false });
    }

    render() { 
        const { modalState } = this.props;

        const initialValues = {
            firstName: "",
            middleName: "",
            lastName: "",
            suffixName: "",
            email: "",
            contactNumber: ""
        }
        
        const validate = Yup.object({
            firstName: Yup.string()
                .required("Your first name is required"),
            middleName: Yup.string(),
            lastName: Yup.string()
                .required("Your last name is required"),
            suffixName: Yup.string(),
            email: Yup.string()
                .email("You typed an invalid email address")
                .required("Your email is required"),
            contactNumber: Yup.number()
                .positive("That is not a valid contact number")
                .integer("That is not a valid contact number")
                .required("Your contact number is required")
        });

        const onSubmit = (values, actions) => {
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                this.onHideModal(actions);
            }, 500);
        }
        
        return (
            <Formik
                initialValues={ initialValues }
                validationSchema={ validate }
                onSubmit={ (values, actions) => onSubmit(values, actions) }
            >
                {props => (
                    <Modal
                        size="lg"
                        backdrop="static"
                        keyboard={ false }
                        scrollable
                        show={ modalState }
                        onHide={ () => this.onHideModal(props) }
                    >
                        <Modal.Header>
                            <h5 className="modal-title" id="exampleModalLabel">
                                <FontAwesomeIcon 
                                    icon={ solid('pen') } 
                                    className="text-secondary me-2" 
                                    fixedWidth 
                                />
                                <span>Edit your basic information</span>
                            </h5>
                            <Button
                                variant="light"
                                size="sm"
                                onClick={ () => this.onHideModal(props) }
                            >
                                <FontAwesomeIcon icon={ solid('times') } />
                            </Button>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <Form onSubmit={ props.handleSubmit }>
                                <p className="fw-bold">Please fill up the following required fields:</p>

                                {/* Applicant Name */}
                                <div className="row g-2 mb-3">
                                    
                                    {/* First Name */}
                                    <div className="col-lg-6">
                                        <FormGroup
                                            label="First name"
                                            isRequired
                                            id="firstName"
                                            name="firstName"
                                            placeholder="ex. Juan"
                                            formikProps={ props }
                                        />
                                    </div>

                                    {/* Middle Name */}
                                    <div className="col-lg-6">
                                        <FormGroup
                                            label="Middle name"
                                            id="middleName"
                                            name="middleName"
                                            placeholder="ex. Pedro"
                                            formikProps={ props }
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div className="col-lg-6">
                                        <FormGroup
                                            label="Last name"
                                            isRequired
                                            id="lastName"
                                            name="lastName"
                                            placeholder="ex. Dela Cruz"
                                            formikProps={ props }
                                        />
                                    </div>
                                    
                                    {/* Suffix/Extension Name */}
                                    <div className="col-lg-6">
                                        <FormGroup
                                            label="Suffix/Extension name"
                                            id="suffixName"
                                            name="suffixName"
                                            placeholder="ex. Jr., III"
                                            formikProps={ props }
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <FormGroup
                                        label="Email"
                                        isRequired
                                        inputType="email"
                                        id="email"
                                        name="email"
                                        placeholder="ex. juandelacruz@sample.com"
                                        formikProps={ props }
                                    />
                                </div>

                                {/* Contact Number */}
                                <div className="mb-3">
                                    <FormGroup
                                        label="Contact Number"
                                        isRequired
                                        inputType="number"
                                        id="contactNumber"
                                        name="contactNumber"
                                        placeholder="ex. (123) 456-7890"
                                        formikProps={ props }
                                    />
                                </div>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button 
                                variant="light" 
                                onClick={ () => this.onHideModal(props) }
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button variant="primary" onClick={ props.handleSubmit }>
                                <span>Save</span>
                                <FontAwesomeIcon icon={ solid('check') } fixedWidth />
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </Formik>
        );
    }
}

export default BasicInfoModal;