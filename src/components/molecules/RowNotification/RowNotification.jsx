import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './RowNotification.css'
import Avatar from 'Atoms/Avatar'
import Icon from 'Atoms/Icon'
import Typography from 'Atoms/Typography';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

class RowNotification extends Component {
  render () {
    const {
      className,
      user,
      campaign,
      coupon,
      onClick,
      onClose
    } = this.props
    return (
      <div className={cx(className, styles.container )}>
        <div className={styles.closeButton} onClick={onClose}>
          <Icon name='MdClose' size={10}/>
        </div>
        <div className={styles.userInformation} onClick={onClick}>
          <div className={styles.avatar}>
            <Avatar image={user.image}/>
          </div>
          <div className={styles.information}>
            <div className={styles.hunterDetails}>
              <Typography.Text bold>{user.name}</Typography.Text>
              <Typography.Text small style={{marginLeft:2}}>
                capturo una promoción.
              </Typography.Text>
            </div>
            <Typography.Text small bold style={{margin:0}}>
              {campaign.title}
            </Typography.Text>
            <Typography.Text small light style={{margin:0}}>
              {coupon.date}
            </Typography.Text>
          </div>
        </div>
      </div>
    )
  }
}

RowNotification.propTypes = {
  className: PropTypes.string,
  user:PropTypes.object,
  campaign: PropTypes.object,
  coupon: PropTypes.object,
  onClick: PropTypes.func,
  onClose: PropTypes.func
}

export default RowNotification;
