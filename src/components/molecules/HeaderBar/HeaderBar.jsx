import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from 'Atoms/Typography';

import styles from './HeaderBar.css';

const cx = classNames.bind(styles)

const HeaderBar = ({ className, title, titleProps, subtitle, subtitleProps }) => {
  return (
    <div className={cx(className, styles.headerBar)}>
      {title && <Typography.Subtitle bold {...titleProps}>{title}</Typography.Subtitle>}
      {subtitle && <Typography.Label className={cx(styles.subtitle)} lighter {...subtitleProps}>{subtitle}</Typography.Label>}
    </div>
  );
}

HeaderBar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  titleProps: PropTypes.object,
  subtitle: PropTypes.string,
  subtitleProps: PropTypes.object,
}


export default HeaderBar;