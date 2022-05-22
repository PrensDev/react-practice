import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class FormGroup extends Component {
	render() {
		const {
			label,
			isRequired = false,
			inputType = "text",
			id,
			name,
			placeholder,
			autofocus = false,
			formikProps
		} = this.props;

		return (
			<Form.Group className="mb-1" controlId={id}>
				{/* Label */}
				<Form.Label className="fw-bold">
					<span>{label}</span>
					{isRequired && <span className="text-danger ms-1">*</span>}
				</Form.Label>

				{/* Input */}
				<Form.Control
					type={inputType}
					name={name}
					className={`form-control${formikProps.touched[name] && formikProps.errors[name] ? " is-invalid" : ""}`}
					placeholder={placeholder}
					onChange={formikProps.handleChange}
					onBlur={formikProps.handleBlur}
					value={formikProps.values[name]}
					autoFocus={autofocus}
					noValidate={true}
					disabled={formikProps.isSubmitting}
				/>

				{/* Error Validation Message */}
				{
					formikProps.touched[name] && formikProps.errors[name]
						? <Form.Control.Feedback type="invalid">{`${formikProps.errors[name]}.`}</Form.Control.Feedback>
						: null
				}
			</Form.Group>
		);
	}
}

export default FormGroup;