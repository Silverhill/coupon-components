import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './BasicRow.css'
import Avatar from 'Atoms/Avatar'
import Typography from 'Atoms/Typography';
import Icon from 'Atoms/Icon'
import Tooltip from 'Atoms/Tooltip'
import * as palette from 'Styles/palette.css';

const cx = classNames.bind(styles)

class BasicRow extends Component {
  render () {
    const {
      title,
      subtitle,
      image,
      label,
      description,
      number,
      onClick,
      iconName,
      className
    } = this.props

    const colorIcon = number ? palette.endGradient : palette.baseGrayMedium;
    const icon = iconName ? iconName : 'CpTicket';
    const num = number || 0;

    return (
      <div className={cx(styles.container, className)} onClick={onClick}>
        <div className={styles.userInformation}>
          {image &&
          <div className={styles.avatar}>
            <Avatar image={image}/>
          </div>
          }
          <div className={styles.information}>
            <Typography.Text small bold>
              {title}
            </Typography.Text>
            <Typography.Label small lighter>
              {subtitle}
            </Typography.Label>
          </div>
        </div>
        <div className={styles.cuponInformation}>
          <div className={styles.date}>
            {label &&
              <Typography.Label small>
                {label}
              </Typography.Label>
            }
            {description &&
              <Typography.Label small>
                {description}
              </Typography.Label>
            }
          </div>
          <div className={styles.cupon}>
            {icon &&
              <Icon
                name={icon}
                color={colorIcon}
                size={20}
                style={{marginRight: 20,
                        padding: 10,
                        background: palette.baseGrayLow,
                        borderRadius: '50%'
                      }}
              />
            }
            <Tooltip content={num} direction="top">
              <Typography.Header bold
                className='truncateText'
                style={{width: '50px', fontSize:'20px'}}>
                {num}
              </Typography.Header>
            </Tooltip>
          </div>
        </div>
      </div>
    )
  }
}

BasicRow.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  number: PropTypes.any,
  iconName: PropTypes.string,
  onClick: PropTypes.func
}

export default BasicRow;
