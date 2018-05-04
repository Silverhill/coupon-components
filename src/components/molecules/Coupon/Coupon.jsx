import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Coupon.css'
import Avatar from 'Atoms/Avatar'
import Typography from 'Atoms/Typography'
import Icon from 'Atoms/Icon'
import * as palette from 'Styles/palette.css'

const cx = classNames.bind(styles)

class Cupon extends Component {
  render () {
    const {
      image,
      logo,
      title,
      address,
      totalCoupons,
      date,
      onClick,
      color,
      className,
      disabled,
      gold
    } = this.props

    let stylesImage = {backgroundImage: `url(${image})`}
    let colorCupon = palette[color] || palette.accentColorSecondary
    colorCupon = disabled ? palette.neutralColorPlain : colorCupon
    colorCupon = gold ? palette.goldGradient : colorCupon
    return (
      <div className={cx(styles.container, className)} onClick={onClick} style={{background: colorCupon}}>
        <div className={styles.brandCampaing}>
          <div className={styles.avatar}>
            <Avatar image={logo}/>
          </div>
          <div className={styles.cupons}>
            <Icon
                name="CpTicket"
                color={palette.whiteColor}
                size={15}
                style={{paddingRight: 5}}
              />
            <Typography.Text small lighter style={{color: palette.whiteColor}}>
              {totalCoupons}
            </Typography.Text>
          </div>
        </div>
        <div className={styles.cuponInformation} style={stylesImage}>
          <div className={styles.backgroundPromo} />
          <div className={styles.promo}>
            <Typography.Text small light style={{color: palette.whiteColor}}>
              {date}
            </Typography.Text>
            <Typography.Text lead className={styles.promoTitle} style={{color: palette.whiteColor}}>
              {title}
            </Typography.Text>
            <Typography.Text small light style={{color: palette.whiteColor}}>
              {address}
            </Typography.Text>
          </div>
        </div>
      </div>
    )
  }
}

Cupon.propTypes = {
  image: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  address: PropTypes.string,
  totalCoupons: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  gold: PropTypes.bool
}

export default Cupon;
