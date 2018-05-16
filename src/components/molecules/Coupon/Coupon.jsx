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
      background,
      className,
      disabled,
      gold,
    } = this.props

    const getBackground = (value) => {

      const rgbExp = /rgb\(\d{1,3},\d{1,3},\d{1,3}\)/;
      const hexExp = /^#\w{6,8}/;
      const urlExp = /^http/;
      const linearExp = /^linear-gradient/;
      const RadialExp = /^radial-gradient/;

      if(rgbExp.test(value) || hexExp.test(value) ){ //hex or RGB
        return {backgroundColor: value}
      }

      if(urlExp.test(value)){ //https
        return {backgroundImage: `url(${value})`, backgroundSize: 'contain'}
      }

      if(linearExp.test(value)){ //linear-gradient
        return {backgroundImage: value}
      }

      if(RadialExp.test(value)){ //radial-gradient
        return {background: value}
      }

      return null;
    }

    let stylesImage = {backgroundImage: `url(${image})`}
    let backgroundCupon = background || palette.accentColorSecondary
    backgroundCupon = disabled ? palette.neutralColorPlain : backgroundCupon
    backgroundCupon = gold ? palette.goldGradient : backgroundCupon
    const patternStyles = getBackground(backgroundCupon)
    return (
      <div className={cx(styles.container, className)} onClick={onClick} style={patternStyles}>
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
        <div className={cx(styles.cuponInformation, styles.backgroundPromo)} style={stylesImage}>
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
  gold: PropTypes.bool,
}

export default Cupon;
