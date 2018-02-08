import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Card.css';

const cx = classNames.bind(styles);

const Card = ({ className, width, flex, height, style, children, ...other }) => {
  return (
    <div className={cx(styles.cardWrapper, className)} style={{width, flex, height, ...style}} {...other}>
      {children}
    </div>
  )
};

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.string,
  flex: PropTypes.number,
  height: PropTypes.string,
  style: PropTypes.object
};

export default Card;
