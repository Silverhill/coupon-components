import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Dropdown.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default class DropdownContent extends Component {
  componentDidMount () {
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  handleOutsideClick = e => {
    const { dismiss } = this.props
    if (this.node && this.node.contains(e.target)) return
    if (dismiss) dismiss()
  }

  render () {
    const { children, className } = this.props;
    return (
      <div className={cx(styles.container, className)}>
        {children}
      </div>
    )
  }
}

DropdownContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
