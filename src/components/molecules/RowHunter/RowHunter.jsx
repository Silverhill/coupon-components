import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './RowHunter.css'
import Avatar from 'Atoms/Avatar'
import Typography from 'Atoms/Typography';
import Icon from 'Atoms/Icon'
import * as palette from 'Styles/palette.css';

const cx = classNames.bind(styles)

class RowHunter extends Component {
  render () {
    const {
      name,
      image,
      email,
      dateLastCoupon,
      totalCoupons,
      onClick,
      className
    } = this.props
    return (
      <div className={cx(styles.container, className)} onClick={onClick}>
        <div className={styles.userInformation}>
          <div className={styles.avatar}>
            <Avatar image={image}/>
          </div>
          <div className={styles.information}>
            <Typography.Header small bold>
              {name}
            </Typography.Header>
            <Typography.Label small lighter>
              {email}
            </Typography.Label>
          </div>
        </div>
        <div className={styles.cuponInformation}>
          {dateLastCoupon &&
            <div className={styles.date}>
              <Typography.Label small>
                Ultimo cupon utilizado:
              </Typography.Label>
              <Typography.Label small>
                {dateLastCoupon}
              </Typography.Label>
            </div>
          }
          <div className={styles.cupon}>
            <Icon
              name="CpTicket"
              color={palette.endGradient}
              size={20}
              style={{marginRight: 20,
                      padding: 10,
                      background: palette.baseGrayLow,
                      borderRadius: '50%'
                    }}
            />
            <Typography.Title>
              {totalCoupons || 0}
            </Typography.Title>
          </div>
        </div>
      </div>
    )
  }
}

RowHunter.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  dateLastCoupon: PropTypes.string,
  totalCoupons: PropTypes.number,
  onClick: PropTypes.func
}

export default RowHunter;
