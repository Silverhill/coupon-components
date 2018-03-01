import React from 'react'
import PropTypes from 'prop-types'
import styles from './Typography.css'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Text = ({ highlight, secondary, disabled, inverted, small, lead, inline, bold, light, normal=true, error, className, style, children }) => {

  if(light || bold) normal = false;
  const theProps = {
    className: cx(className, styles.p, {
      highlight,
      secondary,
      disabled,
      inverted,
      smallText: small,
      lead,
      light,
      bold,
      normalText: normal,
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
  bold: PropTypes.bool,
  light: PropTypes.bool,
  error: PropTypes.bool
}
export default Text
