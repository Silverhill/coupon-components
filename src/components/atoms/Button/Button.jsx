import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Icon from 'Atoms/Icon'

import styles from './Button.scss'
import globalStyles from 'Styles/common.scss'

const cx = classNames.bind(styles)

let colors = {
  primary: globalStyles.btnPrimary,
  secondary: globalStyles.btnSecondary
}

class Button extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  render () {
    const { text, onClick, className, rightIcon, type, shape } = this.props
    const colorBtn = colors[this.props.type] || colors.primary

    return (
      <div className={className}>
        <button type={type} className={cx(styles.btn, colorBtn, shape)}
          onClick={onClick}>
          {text}
          {rightIcon && <Icon className={styles.icon} name={rightIcon} size={16} />}
        </button>
      </div>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  className: PropTypes.string,
  rightIcon: PropTypes.string,
  shape: PropTypes.string
}

export default Button
