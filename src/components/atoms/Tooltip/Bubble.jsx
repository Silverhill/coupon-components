import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../Typography/Header';

import styles from './Tooltip.css';
const cx = classNames.bind(styles);

const Bubble = ({ direction, className, content, show, width }) => {
  const validDirections = ['left', 'right', 'bottom', 'top'];

  const hasDirection = validDirections.includes(direction);
  const tooltipStyles = {
    [styles[direction]]: hasDirection,
    [styles.isShowing]: show,
  };

  return (
    <span className={cx(className, tooltipStyles)} style={{ width }}>
      <Header>{content}</Header>
    </span>
  );
};

Bubble.propTypes = {
  direction: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  show: PropTypes.bool,
  width: PropTypes.string,
};

export default Bubble;