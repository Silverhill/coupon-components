import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Slider.css';

const cx = classNames.bind(styles);

class Dots extends Component {

  onPressDot = (index) => {
    const { onChange } = this.props;
    if(onChange){
      onChange(index);
    }
  }

  render () {
    const { size, currentIndex } = this.props;
    let arrayDots = Array(size).fill(null);

    return (
      <div className={cx(styles.dotsContainer)}>
        {arrayDots && arrayDots.map((item, index) => {
          let isActive = currentIndex === index;
          let key = { key: 'dot_'+index };
          return <div {...key} className={cx(styles.dot, {isActive})} onClick={() => this.onPressDot(index)}/>
        })}
      </div>
    )
  }
}

Dots.propTypes = {
  size: PropTypes.number,
  currentIndex: PropTypes.number,
  onChange: PropTypes.func
}

export default Dots;