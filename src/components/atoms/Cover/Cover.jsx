import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Cover.css'
import Typography from '../Typography'

const cx = classNames.bind(styles)

class Cover extends Component {
  render () {
    const {
      className,
      status,
      leftLabel,
      leftText,
      rightLabel,
      rightText,
      image,
      stylesStatus,
      // width,
      // flex,
      // height,
      style,
      ...other
    } = this.props

    let stylesImage = {backgroundImage: `url(${image})`}

    return (
      <div className={cx(styles.container, className)}>
        <div className={styles.cover} style={stylesImage}>
          <div className={styles.contentText}>
            <div className={styles.status} style={stylesStatus}>
              {status}
            </div>
            <div className={styles.address}>
              <Typography.Text small bold>
                {leftLabel}
              </Typography.Text>
              <Typography.Text small>
                {leftText}
              </Typography.Text>
              <Typography.Text small style={{paddingTop: '5px'}}>
                {rightLabel}
              </Typography.Text>
            </div>
            <div className={styles.coupons}>
              <Typography.Text small>
                {rightLabel}
              </Typography.Text>
              <Typography.Title bold>
                {rightText}
              </Typography.Title>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Cover.propTypes = {
  className: PropTypes.string,
  status: PropTypes.string,
  leftLabel: PropTypes.string,
  leftText: PropTypes.string,
  rightLabel: PropTypes.string,
  rightText: PropTypes.string,
  image: PropTypes.string,
  stylesStatus: PropTypes.object
}

export default Cover;
