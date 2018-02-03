import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Icon from 'Atoms/Icon'

import styles from './Button.css'
import globalStyles from 'Styles/common.css'

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
    const { text,
            onClick,
            className,
            rightIcon,
            leftIcon,
            type,
            shape,
            gradient,
            customWidth,
            disabled }= this.props
    const colorBtn = colors[this.props.type] || colors.primary
    let classNames = cx(
      styles.btn,
      colorBtn,
      shape,
      {[styles.gradient]: gradient},
      { disabled },
    );

    return (
      <div className={className}>
        <button type={type} style={{width:customWidth}} className={classNames}
          onClick={onClick}>
          {leftIcon && <Icon className={styles.leftIcon} name={leftIcon} size={16} />}
          {text}
          {rightIcon && <Icon className={styles.rightIcon} name={rightIcon} size={16} />}
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
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  shape: PropTypes.string,
  customWidth: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
}

export default Button
