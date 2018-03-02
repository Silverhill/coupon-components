import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Cupon.css'
import Avatar from 'Atoms/Avatar'
import Typography from 'Atoms/Typography';
import Icon from 'Atoms/Icon'
import * as palette from 'Styles/palette.css';

const cx = classNames.bind(styles)

class Cupon extends Component {
  render () {
    const { data, onClick, color, className } = this.props
    let stylesImage = {backgroundImage: `url(${data.cupon.image})`}
    let colorCupon = palette[color] || palette.accentColorSecondary
    return (
      <div className={cx(styles.container, className)} onClick={onClick} style={{backgroundColor: colorCupon}}>
        <div className={styles.brandCampaing}>
          <div className={styles.avatar}>
            <Avatar image={data.maker.image}/>
          </div>
          <div className={styles.cupons}>
            <Icon
                name="CpTicket"
                color={palette.whiteColor}
                size={15}
                style={{paddingRight: 5}}
              />
            <Typography.Text small lighter style={{color: palette.whiteColor}}>
              {data.maker.cupons}
            </Typography.Text>
          </div>
        </div>
        <div className={styles.cuponInformation} style={stylesImage}>
          <div className={styles.backgroundPromo} />

          <div className={styles.promo}>
            <Typography.Text small light style={{color: palette.whiteColor}}>
              {data.cupon.date}
            </Typography.Text>
            <Typography.Text lead className={styles.promoTitle} style={{color: palette.whiteColor}}>
              {data.cupon.promo}
            </Typography.Text>
            <Typography.Text small light style={{color: palette.whiteColor}}>
              {data.cupon.address}
            </Typography.Text>
          </div>
        </div>
      </div>
    )
  }
}

Cupon.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Cupon;
