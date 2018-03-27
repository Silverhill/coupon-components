import React, { Component } from 'react';
import Icon from 'Atoms/Icon';
import MenuOptions from './MenuOptions';
import styles from './Menu.css';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default class Menu extends Component {
  state = {
    isShowing: false
  }

  exposeCurrentState = (isShowing) => {
    const { isOpen } = this.props;
    if(isOpen) isOpen(isShowing);
  }

  showMenu = async () => {
    await this.setState({ isShowing: true });

    const { isShowing } = this.state;
    this.exposeCurrentState(isShowing);
  }

  dismissMenu = async () => {
    await this.setState({ isShowing: false });

    const { isShowing } = this.state;
    this.exposeCurrentState(isShowing);
  }

  optionChange = (e, option) => {
    const { onChange } = this.props;
    if (onChange) onChange(e, option);
  }

  render () {
    const { options, leftMenu, className, iconOptions, style } = this.props;
    const { isShowing } = this.state;

    const defaultProps = {
      icon: {
        size: 25,
        name: 'IoAndroidMoreVertical',
        ...iconOptions,
      }
    };

    return (
      <div className={cx(styles.menu, className)} style={{width: defaultProps.icon.size, ...style}}>
        <Icon
          onClick={this.showMenu}
          className={cx(styles.icon, { active: isShowing })}
          {...defaultProps.icon}
        />
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
  className: PropTypes.string,
  isOpen: PropTypes.func,
  iconOptions: PropTypes.object,
  style: PropTypes.object,
}
