import React from 'react'
import PropTypes from 'prop-types'
import styles from './Preloader.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Preloader = ({ size, color, className }) => {
  const ballStyles = {
    width: (size / 3) - 2,
    height: (size / 3) - 2,
    backgroundColor: color && color
  }

  return (
    <div className={cx(styles.spinner, className)} style={{width: size}}>
      <div style={ballStyles} className={styles.bounce1} />
      <div style={ballStyles} className={styles.bounce2} />
      <div style={ballStyles} className={styles.bounce3} />
    </div>
  )
}

Preloader.defaultProps = {
  size: 40
}

Preloader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
}

export default Preloader
