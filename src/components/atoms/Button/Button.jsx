import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Icon from 'Atoms/Icon'

import styles from './Button.css'
import * as palette from 'Styles/palette.css';

const cx = classNames.bind(styles)

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
            color,
            shape,
            gradient,
            customWidth,
            disabled,
            size }= this.props
    const colorBtn = palette[color] || palette.primaryColor
    let classNames = cx(
      styles.btn,
      shape,
      {
        [styles.gradient]: gradient,
        disabled,
        [styles[size]]: size,
      },
    );

    return (
      <div className={className}>
        <button style={{width:customWidth, backgroundColor: colorBtn}} className={classNames}
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
  color: PropTypes.string,
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
