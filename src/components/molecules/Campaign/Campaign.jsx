import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Campaign.css'
import Typography from 'Atoms/Typography'
import Icon from 'Atoms/Icon'
import * as palette from 'Styles/palette.css'

const cx = classNames.bind(styles)

class Campaign extends Component {
  render () {
    const {
      title,
      date,
      address,
      totalCouponsHunted,
      totalCoupons,
      onClick,
      className,
      selected
    } = this.props
    let classNames = selected ?
        cx(styles.container, className, styles.selected) : cx(styles.container, className)
    let selectColor = selected ? palette.whiteColor : palette.silverColor
    return (
      <div className={classNames} onClick={onClick}>
        <div className={styles.promo}>
          <Typography.Text small light style={{color: selectColor}}>
            {date}
          </Typography.Text>
          <Typography.Text lead style={{color: selectColor}} className="truncateText">
            {title}
          </Typography.Text>
          <Typography.Text small light style={{color: selectColor}} className="truncateText">
            {address}
          </Typography.Text>
        </div>
        <div className={styles.coupons}>
          <div className={styles.hunted}>
            <Icon
                name="CpTicket"
                color={selectColor}
                size={15}
                style={{paddingRight: 5}}
              />
            <Typography.Text small lighter style={{color: selectColor}}>
              {totalCouponsHunted}
            </Typography.Text>
          </div>
          <div className={styles.available}>
            <Icon
                name="CpTicket"
                color={selectColor}
                size={15}
                style={{paddingRight: 5}}
              />
            <Typography.Text small lighter style={{color: selectColor}}>
              {totalCoupons}
            </Typography.Text>
          </div>
        </div>
      </div>
    )
  }
}

Campaign.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  address: PropTypes.string,
  totalCoupons: PropTypes.string,
  totalCouponsHunted: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  selected: PropTypes.bool,
}

export default Campaign;
