import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Cover.css'
import Typography from 'Atoms/Typography'
import Avatar from 'Atoms/Avatar'
import * as palette from 'Styles/palette.css'

const cx = classNames.bind(styles)

class Cover extends Component {

  isLightColor = (hex) =>{
    // formula to know if a color is light
    if (hex){
      const c = hex.substring(1);      // strip #
      const rgb = parseInt(c, 16);   // convert rrggbb to decimal
      const r = (rgb >> 16) & 0xff;  // extract red
      const g = (rgb >>  8) & 0xff;  // extract green
      const b = (rgb >>  0) & 0xff;  // extract blue
      const result = (r * 299 + g * 587 + b * 114) / 1000
      return result < 128;
    }
  }

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
      backgroundColor,
      logo
    } = this.props

    const coverColor = backgroundColor || palette.paleLilac;
    const stylesImage = {backgroundImage: `url(${image})`, backgroundColor: coverColor};
    const backdrop = image ? 'backdrop' : '';
    const colorText = this.isLightColor(coverColor) || image ? {color: palette.whiteColor} : {color: palette.dark};
    const colorStatus = stylesStatus ? (stylesStatus.color || palette.paleLilac) : palette.paleLilac;
    return (
      <div className={cx(styles.container, className)}>
        <div className={cx(styles.cover, backdrop)} style={stylesImage}>
          {logo &&
            <div className={styles.logo}>
              <Avatar image={logo}/>
            </div>
          }
          <div className={styles.contentText}>
            <div className={styles.status} style={stylesStatus}>
              <Typography.Text small style={{color: colorStatus}}>
                {status}
              </Typography.Text>
            </div>
            <div className={styles.address}>
              <Typography.Text small light style={colorText}>
                {leftLabel}
              </Typography.Text>
              <Typography.Text small style={colorText}>
                {leftText}
              </Typography.Text>
            </div>
            <div className={styles.coupons}>
              <Typography.Text small style={colorText}>
                {rightLabel}
              </Typography.Text>
              <Typography.Title bold style={colorText}>
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
  logo: PropTypes.string,
  backgroundColor: PropTypes.string,
  stylesStatus: PropTypes.object
}

export default Cover;
