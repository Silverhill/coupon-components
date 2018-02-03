import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Ionicons from 'react-icons/lib/io'
import * as FontAwesome from 'react-icons/lib/fa'
import * as Material from 'react-icons/lib/md'
import * as Octicons from 'react-icons/lib/go'
import * as Typicons from 'react-icons/lib/ti'
import classNames from 'classnames/bind'

import styles from './Icon.css'
const cx = classNames.bind(styles)

class Icon extends Component {
  capitalize = string => {
    return string[0].toUpperCase().concat(string.substring(1))
  }

  get iconName () {
    const splitName = this.props.name.split('-')
    const capitalizeLetters = splitName.map(this.capitalize)
    return capitalizeLetters.join('')
  }

  get icon () {
    const { name } = this.props

    if (/^Io/.test(name)) return {name: Ionicons[name], family: 'Ionicons'}
    else if (/^Fa/.test(name)) return {name: FontAwesome[name], family: 'FontAwesome'}
    else if (/^Md/.test(name)) return {name: Material[name], family: 'Material'}
    else if (/^Ti/.test(name)) return {name: Typicons[name], family: 'Typicon'}
    else if (/^Go/.test(name)) return {name: Octicons[name], family: 'Octoicons'}
    return {name: Ionicons['IoBug'], family: 'Ionicons'}
  }

  onClicked = e => {
    const { onClick, disabled } = this.props
    if (onClick && !disabled) onClick(e)
  }

  render () {
    const {
      name, // eslint-disable-line no-unused-vars
      style,
      onClick,
      className,
      disabled,
      ...other
    } = this.props

    const customStyles = {
      onClick: !!onClick
    }

    const Icon = this.icon.name
    return (
      <i className={cx(styles.iconContainer, className, customStyles, { disabled })}
        onClick={this.onClicked}
        data-family={this.icon.family}
        style={style}
      >
        {React.createElement(Icon, {...other})}
      </i>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default Icon;
