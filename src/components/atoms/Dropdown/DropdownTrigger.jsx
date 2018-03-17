import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DropdownTrigger extends Component {
  render () {
    const { children, className } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    )
  }
}

DropdownTrigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
