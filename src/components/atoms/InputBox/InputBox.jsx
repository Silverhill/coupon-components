import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Icon from '../Icon/Icon'
import Label from '../Typography/Label'

import styles from './InputBox.css'
const cx = classNames.bind(styles)

class InputBox extends Component {
  state = {
    value: ''
  }

  handleChange = ev => {
    const { onChange } = this.props
    this.setState({ value: ev.target.value })
    if (onChange) onChange(ev, ev.target.value)
  }

  handleSubmit = ev => {
    const { onEnter, resetOnEnter, onKeyPress } = this.props
    if (ev.key === 'Enter' && onEnter) {
      onEnter(ev, this.state.value)
      if (resetOnEnter) this.setState({ value: '' })
    }

    if (onKeyPress) onKeyPress(ev)
  }

  render () {
    const {
      type,
      className,
      style,
      placeholder,
      onKeyPress, // eslint-disable-line no-unused-vars
      onEnter, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      resetOnEnter, // eslint-disable-line no-unused-vars
      value,
      labelText,
      rightIcon,
      leftIcon,
      leftIconConfig,
      rightIconConfig,
      shape,
      ...other
    } = this.props

    const iconClassNames = cx(
      {leftIcon, rightIcon},
      styles.input,
      className
    )

    const leftIconC = {...leftIconConfig}
    const customClassLeftIcon = cx(
      styles.lIcon,
      leftIconC.customClass,
      {likePlaceholder: 'likePlaceholder' in leftIconC ? leftIconConfig.likePlaceholder : false}
    )

    const rigthIconC = {...rightIconConfig}
    const customClassRightIcon = cx(
      styles.rIcon,
      rigthIconC.customClass,
      {likePlaceholder: 'likePlaceholder' in rigthIconC ? rightIconConfig.likePlaceholder : false}
    )

    return (
      <div>
        {labelText &&
          <Label>
            {labelText}
          </Label>
        }

        <div className={iconClassNames}>
          {leftIcon &&
            <Icon
              className={customClassLeftIcon}
              name={leftIcon}
              color={leftIconC.color}
              style={leftIconC.style}
            />
          }

          <input type={type}
            className={cx(styles.inputBox, shape)}
            style={style}
            placeholder={placeholder}
            value={value || this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
            {...other} />

          {rightIcon &&
            <Icon
              name={rightIcon}
              className={customClassRightIcon}
              color={rigthIconC.color}
              style={rigthIconC.style}
            />
          }
        </div>
      </div>
    )
  }
}

InputBox.propTypes = {
  placeholder: PropTypes.string,
  submitCallback: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  resetOnEnter: PropTypes.bool,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  labelText: PropTypes.string,
  leftIconConfig: PropTypes.shape({
    likePlaceholder: PropTypes.bool,
    customClass: PropTypes.string,
    customStyles: PropTypes.object
  }),
  rightIconConfig: PropTypes.shape({
    likePlaceholder: PropTypes.bool,
    customClass: PropTypes.string,
    customStyles: PropTypes.object
  })
}

export default InputBox
