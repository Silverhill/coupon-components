import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './RowNotification.css'
import Avatar from 'Atoms/Avatar'
import Typography from 'Atoms/Typography';

class RowNotification extends Component {
  render () {
    const {
      name,
      image,
      dateCoupon,
      codeCoupon,
      onClick
    } = this.props
    return (
      <div className={styles.container} onClick={onClick}>
        <div className={styles.userInformation}>
          <div className={styles.avatar}>
            <Avatar image={image}/>
          </div>
          <div className={styles.information}>
            <Typography.Subtitle bold>
              {name}
            </Typography.Subtitle>
          </div>
        </div>
        <div className={styles.cuponInformation}>
          <Typography.Label lighter style={{margin:0}}>
            Uso el cupón: # {codeCoupon}
          </Typography.Label>
          <Typography.Label lighter style={{margin:0}}>
            {dateCoupon}
          </Typography.Label>
        </div>
      </div>
    )
  }
}

RowNotification.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  dateCoupon: PropTypes.string,
  codeCoupon: PropTypes.string,
  onClick: PropTypes.func
}

export default RowNotification;
