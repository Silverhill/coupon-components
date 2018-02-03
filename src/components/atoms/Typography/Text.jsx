import React from 'react'
import PropTypes from 'prop-types'
import styles from './Typography.css'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Text = ({highlight, secondary, disabled, inverted, small, lead, inline, bolder, lighter, error, className, style, children}) => {
  const theProps = {
    className: cx(className, styles.p, {
      highlight,
      secondary,
      disabled,
      inverted,
      smallText: small,
      lead,
      lighter,
      bolder,
      error
    }),
    style
  }

  const tagElement = inline ? 'span' : 'p'
  return React.createElement(tagElement, theProps, children)
}

Text.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  highlight: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  style: PropTypes.object,
  lead: PropTypes.bool,
  small: PropTypes.bool,
  inline: PropTypes.bool,
  bolder: PropTypes.bool,
  lighter: PropTypes.bool,
  error: PropTypes.bool
}
export default Text
