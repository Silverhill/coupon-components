import React, { cloneElement, Component } from 'react';

import PropTypes from 'prop-types'
import styles from './Dropdown.css'
import DropdownTrigger from './DropdownTrigger'
import DropdownContent from './DropdownContent'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default class Dropdown extends Component {
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
    const { children } = this.props
    const { isShowing } = this.state
    const  trigger = DropdownTrigger
    const  content = DropdownContent

    const triggerComponent = React.Children.map(children, child => {
      return child.type === trigger ? child : null;
    });

    const contentComponent = React.Children.map(children, child => {
      if (child.type === content) {
        child = cloneElement(child, {
          dismiss: this.dismissMenu
        });
      }else{
        child = null;
      }
      return child;
    });

    return (
      <div className={cx(styles.dropdown)}>
        <div onClick={this.showMenu}>
          {triggerComponent}
        </div>
        {isShowing &&
          <div>
            {contentComponent}
          </div>
        }
      </div>
    )
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
