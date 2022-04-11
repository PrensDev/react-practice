import React, { Component } from 'react'

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
            <div className="mb-1">
                {/* Label */}
                <label htmlFor={ id } className="fw-bold">
                    <span>{ label }</span>
                    { isRequired && <span className="text-danger ms-1">*</span> }
                </label>

                {/* Input */}
                <input 
                    type={ inputType } 
                    name={ name }
                    id={ id } 
                    className={ `form-control${ formikProps.touched[name] && formikProps.errors[name] ? " is-invalid" : "" }` } 
                    placeholder={ placeholder } 
                    onChange={ formikProps.handleChange }
                    onBlur={ formikProps.handleBlur }
                    value={ formikProps.values[name] }
                    autoFocus={ autofocus }
                    noValidate={ true }
                    disabled={ formikProps.isSubmitting }
                />

                {/* Error Validation Message */}
                {
                    formikProps.touched[name] && formikProps.errors[name] 
                        ? <div className="invalid-feedback">{ `${ formikProps.errors[name] }.`}</div>
                        : null
                }
            </div>
        );
    }
}

export default FormGroup;