import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Form extends Component {
  storeRef = ref => {
    this.inputRef = ref;
  };

  forceSubmit = () => {
    this.inputRef.click();
  }

  validate = () => {
    const formLength = this.formEl.length;

    if (this.formEl.checkValidity() === false) {
      for (let i = 0; i < formLength - 1; i++) {
        const elem = this.formEl[i];
        const errorLabel = elem.parentNode.parentNode.parentNode.querySelector('.invalid-feedback');
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {

          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage;
          } else {
            errorLabel.textContent = '';
          }
        }
      }
      return false;
    } else {
      for (let i = 0; i < formLength; i++) {
        const elem = this.formEl[i];
        const errorLabel = elem.parentNode.parentNode.querySelector('.invalid-feedback');
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          errorLabel.textContent = '';
        }
      };

      return true;
    }
  }

  submitHandler = (event) => {
    event.preventDefault();

    if (this.validate()) {
      this.props.submit();
    }
  }

  render() {
    const { className, submit, ...rest } = this.props;
    console.log('render');
    return (
      <form ref={form => this.formEl = form} onSubmit={this.submitHandler} {...rest} className={cx(className)} noValidate>
        {this.props.children}
        <input className={styles.inputSubmit} type="submit" ref={this.storeRef} />
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  submit: PropTypes.func.isRequired
};

export default Form;
