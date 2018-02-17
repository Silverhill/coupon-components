import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Icon from 'Atoms/Icon'

import styles from './RoundButton.css'
import * as palette from 'Styles/palette.css';

const cx = classNames.bind(styles)


class RoundButton extends Component {

  getIconSize (size) {
    let defaultSize = 15;
    switch (size) {
      case 'small':
        return defaultSize - 7
      case 'medium':
        return defaultSize - 3
      case 'large':
        return defaultSize - 5
      default:
        return defaultSize
    }
  }

  render () {
    const {onClick,
            className,
            icon,
            color,
            disabled,
            size }= this.props
    const colorBtn = palette[color] || palette.primaryColor
    let classNames = cx(
      styles.btn,
      { disabled,
        [styles[size]]: size,
      },
    );

    return (
      <div className={className}>
        <button style={{backgroundColor: !disabled && colorBtn}} className={classNames}
          onClick={onClick}>
          {icon && <Icon name={icon} size={this.getIconSize(size)} />}
        </button>
      </div>
    )
  }
}

RoundButton.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
}

export default RoundButton
