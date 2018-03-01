import React from 'react'
import PropTypes from 'prop-types'
import styles from './Typography.css'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Label = ({highlight, secondary, disabled, inverted, style, light, bold, normalFont=true, className, children}) => {
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
    <h3 className={cx(styles.label, className, customStyles)}
      style={style}
    >
      {children}
    </h3>
  )
}

Label.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  highlight: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  style: PropTypes.object,
  bold: PropTypes.bool,
  light: PropTypes.bool
}

export default Label
