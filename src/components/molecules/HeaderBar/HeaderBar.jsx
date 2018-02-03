import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Typography from 'Atoms/Typography'

import styles from './HeaderBar.scss'

const cx = classNames.bind(styles)

class HeaderBar extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { title, titleProps, subtitle, subtitleProps} = this.props

    return (
      <div className={cx(styles.headerBar)}>
        {title && <Typography.Subtitle highlight {...titleProps}>{title}</Typography.Subtitle>}
        {subtitle && <Typography.Header secondary bolder {...subtitleProps}>{subtitle}</Typography.Header>}
      </div>
    );
  }
}

HeaderBar.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.object,
  subtitle: PropTypes.string,
  subtitleProps: PropTypes.object,
}


export default HeaderBar;