import React from 'react'
import PropTypes from 'prop-types'
import styles from './Typography.css'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Title = ({ highlight, secondary, disabled, inverted, light, style, bold, normalFont=true, className, children }) => {
  if(light || bold) normalFont = false;
  const customStyles = {
    highlight,
    secondary,
    disabled,
    inverted,
    light,
    bold,
    normalFont,
  }

  return (
    <h1 className={cx(styles.title, className, customStyles, styles.fontFamily)}
      style={style}
    >
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  highlight: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  style: PropTypes.object,
  bold: PropTypes.bool,
  light: PropTypes.bool,
}

export default Title
