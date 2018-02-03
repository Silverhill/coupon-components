import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Card.css'
import Text from '../Typography/Text'

const cx = classNames.bind(styles);

class Card extends Component {
  render () {
    const { className, width, flex, height, style, title, subtitle, ...other } = this.props
    return (
      <div>
        <div className={styles.description}>
          {title &&
            <div className={styles.title}>
              <div class={styles.line}></div>
              <Text small>
                {title}
              </Text>
            </div>
          }
          {subtitle &&
            <div>
              <Text small>
                {subtitle}
              </Text>
            </div>
          }
        </div>
        <div className={cx(styles.cardWrapper, 'card', className)} style={{width, flex, height, ...style}} {...other}>
          {this.props.children}
        </div>
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
  style: PropTypes.object,
  title: PropTypes.object,
  subtitle: PropTypes.object
}

export default Card;
