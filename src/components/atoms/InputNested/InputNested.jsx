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
      ...other
    } = this.props
    return (
      <div>
        {labelText &&
          <Label>
            {labelText}
          </Label>
        }
        <div className={styles.container} >
          <div className={styles.line}/>
          {this.props.children}
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
