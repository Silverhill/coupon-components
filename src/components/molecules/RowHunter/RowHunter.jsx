import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './RowHunter.css'
import Avatar from 'Atoms/Avatar'
import Typography from 'Atoms/Typography';
import Icon from 'Atoms/Icon'

const cx = classNames.bind(styles)

class RowHunter extends Component {
  render () {
    const { data, onClick } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.userInformation}>
          <div className={styles.avatar}>
            <Avatar image={data.user.image}/>
          </div>
          <div className={styles.information}>
            <Typography.Header small>
              {data.user.name}
            </Typography.Header>
            <Typography.Text small>
              {data.user.email}
            </Typography.Text>
          </div>
        </div>
        <div className={styles.cuponInformation}>
          <div className={styles.date}>
            <Typography.Text small>
              Ultimo cupon utilizado:
            </Typography.Text>
            <Typography.Text small>
              {data.cupon.date}
            </Typography.Text>
          </div>
          <div className={styles.cupon}>
            <Icon
              name="MdWifi"
              color="#3BA3F8"
              size={20}
              style={{marginRight: 20, marginTop: 10}}
            />
            <Typography.Text>
              {data.cupon.total}
            </Typography.Text>
          </div>
        </div>
      </div>
    )
  }
}

RowHunter.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
}

export default RowHunter;
