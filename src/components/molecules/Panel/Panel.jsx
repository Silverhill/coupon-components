import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Panel.css';
import HeaderBar from 'Molecules/HeaderBar';

const cx = classNames.bind(styles)

class Panel extends Component {
  render () {
    const { className,
            classNameHeader,
            classNameContainer,
            headerProps,
            title,
            subtitle,
            children } = this.props;

    return (
      <div className={cx(styles.panel, className)}>
        <HeaderBar className={classNameHeader} title={title} subtitle={subtitle} {...headerProps}/>
        <div className={cx(styles.panel, classNameContainer)}>
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
  headerProps: PropTypes.object,
  classNameHeader: PropTypes.string,
  classNameContainer: PropTypes.string
}

export default Panel;
