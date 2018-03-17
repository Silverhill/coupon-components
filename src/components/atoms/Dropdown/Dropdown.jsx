import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Dropdown.css'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default class Dropdown extends Component {
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
    const { show } = this.props
    return (
      <div className={cx(styles.container)}>
        {show &&
         this.props.children
        }
      </div>
    )
  }
}

Dropdown.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  dismiss: PropTypes.func
}
