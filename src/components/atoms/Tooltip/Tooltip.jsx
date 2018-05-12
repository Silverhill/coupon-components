import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Bubble from './Bubble';

import styles from './Tooltip.css';
const cx = classNames.bind(styles);

export default class Tooltip extends Component {
  state = {
    show: false,
  }

  onMouseOut = () => {
    this.toggle();
  }

  onMouseOver = () => {
    this.toggle();
  }

  toggle = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { show } = this.state;
    const { direction = 'top', content, containerClass, bubbleClass, width, children, trigger } = this.props;

    let currentTrigger = show;
    if(trigger !== undefined) currentTrigger = trigger;

    return (
      <div
        className={cx(styles.container, containerClass)}
        onMouseOut={this.onMouseOut}
        onMouseOver={this.onMouseOver}
      >
        <Bubble
          direction={direction}
          className={bubbleClass}
          content={content}
          show={currentTrigger}
          width={width}
        />
        {children}
      </div>
    );
  }
}

Tooltip.propTypes = {
  direction: PropTypes.string,
  content: PropTypes.any,
  containerClass: PropTypes.string,
  bubbleClass: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.element,
  trigger: PropTypes.bool,
}
