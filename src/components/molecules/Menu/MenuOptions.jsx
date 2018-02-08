import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'Atoms/Icon'
import Typography from 'Atoms/Typography'
import styles from './Menu.css'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default class MenuOptions extends Component {
  componentDidMount () {
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  handleOutsideClick = e => {
    const { dismiss } = this.props
    if (this.node && this.node.contains(e.target)) return
    if (dismiss) dismiss()
  }

  render () {
    const { options, leftMenu, onChange } = this.props
    return (
      <div className={cx(styles.list, { leftMenu })}>
        {options && options.map((option, i) => {
          const name = 'iconName' in option && option.iconName

          return (
            <div key={`option-${i}`} onClick={(e) => onChange(e, option)} className={styles.item}>
              <Icon name={name} size={15} className={styles.itemIcon} />
              <Typography.Text small className={styles.option}>{option.label}</Typography.Text>
            </div>
          )
        })}
      </div>
    )
  }
}

MenuOptions.propTypes = {
  options: PropTypes.array,
  leftMenu: PropTypes.bool,
  onChange: PropTypes.func,
  dismiss: PropTypes.func
}
