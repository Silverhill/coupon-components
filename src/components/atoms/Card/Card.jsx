import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Card.css'
import Text from '../Typography/Text'
import { darkNeutral } from 'Styles/palette.css'

const cx = classNames.bind(styles)

class Card extends Component {
  render () {
    const {
      classNameContent,
      classNameHeader,
      classNameCard,
      width,
      flex,
      height,
      style,
      title,
      subtitle,
      ...other
    } = this.props
    return (
      <div className={classNameCard}>
        <div className={cx(styles.description, classNameHeader)}>
          {title &&
            <div className={styles.title}>
              <div className={styles.line}></div>
              <Text small bold>
                {title}
              </Text>
            </div>
          }
          {subtitle && <Text small style={{color: darkNeutral}}>{subtitle}</Text>}
        </div>
        <div
          className={cx(styles.cardWrapper, 'card', classNameContent)}
          style={{width, flex, height, ...style}}
          {...other}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  children: PropTypes.any,
  classNameCard: PropTypes.string,
  classNameContent: PropTypes.string,
  classNameHeader: PropTypes.string,
  width: PropTypes.string,
  flex: PropTypes.number,
  height: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Card;
