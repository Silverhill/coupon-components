import React, { Component } from 'react'
import Icon from 'Atoms/Icon'
import MenuOptions from './MenuOptions'
import styles from './Menu.scss'
import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default class Menu extends Component {
  state = {
    isShowing: false
  }

  showMenu = () => {
    this.setState({ isShowing: true })
  }

  dismissMenu = () => {
    this.setState({ isShowing: false })
  }

  optionChange = (e, option) => {
    const { onChange } = this.props
    if (onChange) onChange(e, option)
  }

  render () {
    const { options, leftMenu, className } = this.props
    const { isShowing } = this.state
    const size = 25

    return (
      <div className={cx(styles.menu)} style={{width: size}}>
        <Icon
          onClick={this.showMenu}
          name='IoAndroidMoreVertical'
          className={cx(styles.icon, className, { active: isShowing })}
          size={size} />
        {isShowing &&
          <MenuOptions
            dismiss={this.dismissMenu}
            leftMenu={leftMenu}
            options={options}
            onChange={this.optionChange} />}
      </div>
    )
  }
}

Menu.propTypes = {
  options: PropTypes.array,
  leftMenu: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
}
