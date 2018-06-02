import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Icon from 'Atoms/Icon';
import Preloader from 'Atoms/Loaders';

import styles from './InputFile.css';
const cx = classNames.bind(styles);

class InputFile extends Component {

  storeRef = ref => {
    this.inputRef = ref;
  };

  handleClick = e => {
    let { isLoading } = this.props;
    if(!isLoading){
      this.inputRef.click();
    }
  };

  handleChange = (ev) => {
    ev.persist();

    let { updateFile, reduxFormInput } = this.props;
    let reader = new FileReader();
    let file = ev.target.files[0];

    reader.onloadend = () => {
      let infoFile =  { file: file, imagePreviewUrl: reader.result };

      //callback of the parent Component
      if (updateFile && !reduxFormInput) updateFile(ev, infoFile);
      //callback of reduxForm
      if (reduxFormInput && !updateFile){
        let {input:{onChange, onBlur}} = this.props;
        onChange(infoFile);
        onBlur(infoFile);
      }
    }

    reader.readAsDataURL(file);
  }


  render () {
    const { className, input, children, isLoading, loader } = this.props;
    let inputProps = { onChange: this.handleChange, onBlur: this.handleChange };

    return (
      <div className={cx(className, styles.container)}>
        <input className={styles.inputField}
              type="file"
              accept=".png,.gif,.jpeg,.svg"
              ref={this.storeRef} {...inputProps}/>
        <div className={styles.triggerContainer} onClick={this.handleClick}>
          {children}
          {!isLoading && <Icon name="FaCamera" className={styles.uploadIcon}/>}
          {isLoading && <Preloader color='white' {...loader} className={styles.loader}/>}
        </div>
      </div>
    )
  }
}

InputFile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  updateFile: PropTypes.func,
  isLoading: PropTypes.bool,
  loader: PropTypes.object,
}

export default InputFile
