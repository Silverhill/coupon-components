import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Panel.css'
import HeaderBar from 'Molecules/HeaderBar'

const cx = classNames.bind(styles)

class Panel extends Component {
  render () {
    const { className, title, subtitle, children } = this.props
    return (
      <div className={styles.panel}>
        <HeaderBar title={title} subtitle={subtitle}/>
        <div className={styles.container}>
          {children}
        </div>
      </div>
    )
  }
}

Panel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.any,
}

export default Panel;
