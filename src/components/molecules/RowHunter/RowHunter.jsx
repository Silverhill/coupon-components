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
    const { data, onClick } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.userInformation}>
          <div className={styles.avatar}>
            <Avatar image={data.user.image}/>
          </div>
          <div className={styles.information}>
            <Typography.Header small bold>
              {data.user.name}
            </Typography.Header>
            <Typography.Text small secondary lighter>
              {data.user.email}
            </Typography.Text>
          </div>
        </div>
        <div className={styles.cuponInformation}>
          <div className={styles.date}>
            <Typography.Text small secondary>
              Ultimo cupon utilizado:
            </Typography.Text>
            <Typography.Text small secondary>
              {data.cupon.date}
            </Typography.Text>
          </div>
          <div className={styles.cupon}>
            <Icon
              name="CpTicket"
              color={palette.endGradient}
              size={20}
              style={{marginRight: 20,
                      padding: 10,
                      background: palette.coverMainColor,
                      borderRadius: '50%'
                    }}
            />
            <Typography.Title>
              {data.cupon.total}
            </Typography.Title>
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
