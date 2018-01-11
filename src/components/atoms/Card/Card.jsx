import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Card.scss'

const cx = classNames.bind(styles)

class Card extends Component {
  render () {
    const { className, width, flex, height, style, ...other } = this.props
    return (
      <div className={cx(styles.cardWrapper, 'card', className)} style={{width, flex, height, ...style}} {...other}>
        {this.props.children}
      </div>
    )
  }
}

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.string,
  flex: PropTypes.number,
  height: PropTypes.string,
  style: PropTypes.object
}

export default Card
