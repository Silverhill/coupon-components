import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './RowNotification.css'
import Avatar from 'Atoms/Avatar'
import Typography from 'Atoms/Typography';
import Icon from 'Atoms/Icon'

const cx = classNames.bind(styles)

class RowNotification extends Component {
  render () {
    const { data, onClick } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.userInformation}>
          <div className={styles.avatar}>
            <Avatar image={data.user.image}/>
          </div>
          <div className={styles.information}>
            <Typography.Title>
              {data.user.name}
            </Typography.Title>
          </div>
        </div>
        <div className={styles.cuponInformation}>
          <Typography.Label lighter style={{margin:0}}>
            Uso el cupón: # {data.cupon.codigo}
          </Typography.Label>
          <Typography.Label lighter style={{margin:0}}>
            {data.cupon.date}
          </Typography.Label>
        </div>
      </div>
    )
  }
}

RowNotification.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
}

export default RowNotification;