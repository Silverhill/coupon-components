import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Dropdown.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default class DropdownTrigger extends Component {
  render () {
    const { children, className } = this.props;
    return (
      <div className={cx(styles.dropdownTrigger, className)}>
        {children}
      </div>
    )
  }
}

DropdownTrigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
