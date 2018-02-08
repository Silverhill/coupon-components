import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from 'Atoms/Typography';

import styles from './HeaderBar.css';

const cx = classNames.bind(styles)

const HeaderBar = ({ title, titleProps, subtitle, subtitleProps }) => {
  return (
    <div className={cx(styles.headerBar)}>
      {title && <Typography.Subtitle highlight {...titleProps}>{title}</Typography.Subtitle>}
      {subtitle && <Typography.Header secondary bolder {...subtitleProps}>{subtitle}</Typography.Header>}
    </div>
  );
}

HeaderBar.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.object,
  subtitle: PropTypes.string,
  subtitleProps: PropTypes.object,
}


export default HeaderBar;