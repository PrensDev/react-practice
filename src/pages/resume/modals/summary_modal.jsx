// React
import React, { Component } from 'react';

// Bootstrap
import {
    Modal,
    Form,
    Button
} from 'react-bootstrap';

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class SummaryModal extends Component {
    validateForm = (e) => {
        e.preventDefault();
        alert('Submitted')
    }

    render() { 
        return (
            <Modal size="lg">
                <Modal.Header>
                    <h5 className="modal-title">
                        <FontAwesomeIcon 
                            icon={ solid('pen') }
                            className="text-secondary me-1" 
                            fixedWidth 
                        />
                        <span>Edit your resume summary</span>
                    </h5>
                    <Button 
                        variant="light" 
                        size="sm"
                    >
                        <FontAwesomeIcon icon={ solid('times') } />
                    </Button>
                </Modal.Header>
                
                <Modal.Body>
                    <Form>
                        <p className="fw-bold">Please fill up the following required fields:</p>

                        {/* Summary Field */}
                        <Form.Group className="mb-3" controlId="resume__summary">
                            <Form.Label className="fw-bold">
                                <span>Summary</span>
                                <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={ 8 }
                                placeholder="Briefly describe something about you ..."
                            ></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="light">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="primary">
                        <span>Save</span>
                        <FontAwesomeIcon 
                            icon={ solid('check') } 
                            className="ms-1"
                            fixedWidth 
                        />
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SummaryModal;