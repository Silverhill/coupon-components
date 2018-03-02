import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Plan.css'
import Typography from 'Atoms/Typography'
import Icon from 'Atoms/Icon'
import * as palette from 'Styles/palette.css'

const cx = classNames.bind(styles)

class Plan extends Component {
  render () {
    const { data, selected, disabled, onClick } = this.props
    const currentBackground = disabled
      ? { backgroundColor: palette.neutralColorMedium }
      : { backgroundImage: 'linear-gradient(60deg, '+palette.starGradient+', 20%, '+palette.endGradient+')' }
    let selectColor = selected ? palette.highlightNeutral : palette.neutralColorMedium
    let selectIcon = selected ? 'FaCheckCircle' : 'FaCircleThin'

    return (
      <div className={cx(styles.container, { selected })} onClick={onClick}>
        <div className={styles.status}>
          <Icon name={selectIcon} size={20} color={selectColor}/>
        </div>
        <div className={styles.plan}>
          <Icon name="CpTicket"
            color={palette.whiteColor}
            size={35}
            style={{padding: 10,
                    borderRadius: '50%',
                    ...currentBackground,
                  }}
          />
          <div className={styles.information}>
            <Typography.Title bold>
              {data.name}
            </Typography.Title>
            <Typography.Label lighter style={{margin: 0}}>
              {data.total_coupon} cupones
            </Typography.Label>
          </div>

        </div>
        <div className={styles.footer}>
          <Typography.Text small bold>
            {data.caption}
          </Typography.Text>
        </div>
      </div>
    )
  }
}

Plan.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Plan;
