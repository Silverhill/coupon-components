import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Plan.css'
import Typography from 'Atoms/Typography';
import Icon from 'Atoms/Icon'

const cx = classNames.bind(styles)

class Plan extends Component {
  render () {
    const { data, onClick } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.plan}>
          <div className={styles.icon}>
            <Icon name='TiCode' size={30} color='#FFFF' style={{padding: 10, backgroundColor: '#3BA3F8', borderRadius: '50%'}}/>
          </div>
          <div className={styles.information}>
            <Typography.Title>
              {data.name}
            </Typography.Title>
            <Typography.Header>
              {data.total_coupon}
            </Typography.Header>
          </div>
          <div className={styles.status}>
            <Icon name='TiCode' size={10} color='#FFFF' style={{padding: 3, backgroundColor: '#3BA3F8', borderRadius: '50%'}}/>
          </div>
        </div>
        <div className={styles.footer}>
          <Typography.Label lighter style={{margin:0}}>
            $ {data.total_price} - ahorra 25%
          </Typography.Label>
        </div>
      </div>
    )
  }
}

Plan.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
}

export default Plan;