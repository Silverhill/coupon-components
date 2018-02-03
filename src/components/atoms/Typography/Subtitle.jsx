import React from 'react'
import PropTypes from 'prop-types'
import styles from './Typography.css'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Subtitle = ({highlight, secondary, disabled, inverted, style, lighter, bolder, className, children}) => {
  const customStyles = {
    highlight,
    secondary,
    disabled,
    inverted,
    lighter,
    bolder
  }

  return (
    <h3 className={cx(styles.subtitle, className, customStyles)}
      style={style}
    >
      {children}
    </h3>
  )
}

Subtitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  highlight: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  style: PropTypes.object,
  lighter: PropTypes.bool,
  bolder: PropTypes.bool
}

export default Subtitle
