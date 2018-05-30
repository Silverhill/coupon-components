import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import * as palette from 'Styles/palette.css'

import styles from './Avatar.css'
const cx = classNames.bind(styles)

class Avatar extends Component {
  render () {
    const {
      image,
      borderColor,
      className,
    } = this.props
    const colorBorder = palette[borderColor] || palette.accentColorSecondary
    const colorSize = this.props.borderSize || '4px'
    const borderStyles = this.props.borderColor ? colorSize + ' solid ' + colorBorder : 'none'
    const stylesComponent = image ? {backgroundImage: `url(${image})`} : {}

    return (
      <div className={cx(styles.container, className)}>
        <div className={cx(styles.ratio, styles.imgResponsive, styles.imgCircle)}
          style={{...stylesComponent, border: borderStyles}}
        />
      </div>
    )
  }
}

Avatar.propTypes = {
  image: PropTypes.string,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string
}

export default Avatar
