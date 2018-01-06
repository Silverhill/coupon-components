import React from 'react'
import PropTypes from 'prop-types'
import styles from './Typography.scss'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Header = ({className, children, highlight, secondary, disabled, inverted, lighter, bolder, style}) => {
  const customStyles = {
    highlight,
    secondary,
    disabled,
    inverted,
    lighter,
    bolder
  }
  return <h4 className={cx(styles.header, className, customStyles)} style={style}>{children}</h4>
}

Header.propTypes = {
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

export default Header
