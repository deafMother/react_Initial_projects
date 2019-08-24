import React from 'react';
import { Field, reduxForm } from 'redux-form'; //Field is a component, reduxForm is a function that works like the connect function
import { connect } from 'react-redux'; // no need for connect when wsing redux-form
class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`; // for error checking using redux-form
    // input is an object with various properties
    // ..input  handles onchange and sets the value of the input field
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

// this function  handles form validation
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    // we can test various conditions here like case and numbers etc
    errors.title = 'Enter a vaule';
  }
  if (!formValues.description) {
    errors.description = 'Enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm', // the name of this form is streamForm
  validate // function to check for error
})(StreamForm);

// once reduxFrom is used the component will receive a ton of additional props
// Field component will be used when using redux-form, it represents an input component
// like text box, radio button...
