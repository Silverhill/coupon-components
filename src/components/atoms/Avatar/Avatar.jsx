import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Avatar.css'
const cx = classNames.bind(styles)

class Avatar extends Component {

  render () {
    const {
      image,
      ...other
    } = this.props
    return (
      <div className={styles.container}>
        <div className={cx(styles.ratio, styles.imgResponsive, styles.imgCircle)} style={{backgroundImage: `url(${this.props.image})`}}/>
      </div>
    )
  }
}

Avatar.propTypes = {
  image: PropTypes.string,
  borderColor: PropTypes.string
}

export default Avatar
