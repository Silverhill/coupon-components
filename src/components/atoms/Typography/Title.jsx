import React from 'react'
import PropTypes from 'prop-types'
import styles from './Typography.css'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Title = ({highlight, secondary, disabled, inverted, lighter, style, className, children}) => {
  const customStyles = {
    highlight,
    secondary,
    disabled,
    inverted,
    lighter
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
  style: PropTypes.object
}

export default Title
