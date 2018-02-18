import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Ionicons from 'react-icons/lib/io';
import * as FontAwesome from 'react-icons/lib/fa';
import * as Material from 'react-icons/lib/md';
import * as Octicons from 'react-icons/lib/go';
import * as Typicons from 'react-icons/lib/ti';
import customIcons from './customIcons';
import classNames from 'classnames/bind';

import styles from './Icon.css'
const cx = classNames.bind(styles)

const CustomIcon = ({ name, size = '1em', color }) => {

  const getPath = () => {
    const iconName = (name || '').substring(2);
    const icon = Object.keys(customIcons).includes(iconName);

    if(icon) return customIcons[iconName];

    console.warn(`The name --->${name}<--- does not exist, You could make sure that the name --->${iconName}<--- exists in the list of custom icons.`);
    return '';
  }

  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ verticalAlign: 'middle', color }}
    >
      <g>
        <path d={getPath()}></path>
      </g>
    </svg>
  );
}

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
    const { name, ...other } = this.props

    if (/^Io/.test(name)) return {component: Ionicons[name], family: 'Ionicons'}
    else if (/^Fa/.test(name)) return {component: FontAwesome[name], family: 'FontAwesome'}
    else if (/^Md/.test(name)) return {component: Material[name], family: 'Material'}
    else if (/^Ti/.test(name)) return {component: Typicons[name], family: 'Typicon'}
    else if (/^Go/.test(name)) return {component: Octicons[name], family: 'Octoicons'}
    else if (/^Cp/.test(name)) return {component: <CustomIcon name={name} {...other} />, family: 'Couponicons' }
    return {component: Ionicons['IoBug'], family: 'Ionicons'}
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

    const Icon = /^Cp/.test(name)
      ? this.icon.component
      : React.createElement(this.icon.component, {...other});

    return (
      <i className={cx(styles.iconContainer, className, customStyles, { disabled })}
        onClick={this.onClicked}
        data-family={this.icon.family}
        style={style}
      >
        {Icon}
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
