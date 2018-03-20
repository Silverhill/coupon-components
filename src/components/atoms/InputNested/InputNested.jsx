import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Label from '../Typography/Label'

import styles from './InputNested.css'
const cx = classNames.bind(styles)

class InputNested extends Component {
  render () {
    const {
      labelText,
      className
    } = this.props;

    return (
      <div>
        {labelText &&
          <Label>
            {labelText}
          </Label>
        }
        <div className={cx(styles.container, className)} >
          <div className={styles.line}/>
          <div className={styles.components}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

InputNested.propTypes = {
  children: PropTypes.any,
  labelText: PropTypes.string
}

export default InputNested
