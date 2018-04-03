import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './InputFile.css'

const cx = classNames.bind(styles)


class InputFile extends Component {
  state = {
    field: null
  }

  storeRef = ref => {
    this.inputRef = ref;
  };

  handleClick = e => {
    this.inputRef.click();
  };

  handleChange = ev => {
    const { onChange } = this.props
    this.setState({ file: ev.target.files[0] })
    if (onChange) onChange(ev, ev.target.files[0])
  }

  render () {
    const { className, file, input, reduxFormInput } = this.props;

    let inputProps = {
      onChange: this.handleChange,
      file: file || this.state.file
    };

    if(reduxFormInput) {
      inputProps = { ...input }
    }

    return (
      <div className={cx(className, styles.container)}>
        <input className={cx(className, styles.inputTrigger)} type="file" ref={this.storeRef} {...inputProps}/>
        <h2 onClick={this.handleClick}>
          Click Me.!
        </h2>
      </div>
    )
  }
}

InputFile.propTypes = {
  className: PropTypes.string,
}

export default InputFile
