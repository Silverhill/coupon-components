import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import * as palette from 'Styles/palette.css';

import styles from './Avatar.css'
const cx = classNames.bind(styles)

class Avatar extends Component {

  render () {
    const {
      image,
      borderColor,
      ...other
    } = this.props
    const colorBorder = palette[borderColor] || palette.accentColorSecondary
    let borderStyles = this.props.borderColor ? '4px solid ' + colorBorder : 'none'
    let stylesComponent = {backgroundImage: `url(${this.props.image})`, border: borderStyles}
    return (
      <div className={styles.container}>
        <div className={cx(styles.ratio, styles.imgResponsive, styles.imgCircle)}
            style={stylesComponent}/>
      </div>
    )
  }
}

Avatar.propTypes = {
  image: PropTypes.string,
  borderColor: PropTypes.string
}

export default Avatar
