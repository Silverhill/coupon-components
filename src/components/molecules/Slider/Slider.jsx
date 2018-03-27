import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Slider.css';
import Dots from './Dots';
import SliderItem from './SliderItem';

const cx = classNames.bind(styles);

class Slider extends Component {
  state = {
    currentItem: {},
    currentIndex: 0,
  }

  componentWillMount() {
    const { items } = this.props;
    this.setState({ currentIndex: 0, currentItem: items[0] });
  }

  handleDot = (index) => {
    const { items } = this.props;
    this.setState(({ currentIndex: index, currentItem: items[index] }));
  }

  componentDidMount() {
    let defaultTime = this.props.interval || 5000;

    setInterval(async () => {
      const { items } = this.props;
      await this.setState(({ currentIndex }) => {
        const isFinalIndex = items.length === currentIndex + 1;
        return({
                currentIndex: isFinalIndex ? 0 : currentIndex + 1,
                currentItem: isFinalIndex ? items[0] : items[currentIndex + 1]
              })
      });
    }, defaultTime)
  }

  render () {
    const { className, items, dots } = this.props;
    const { currentItem, currentIndex } = this.state;
    let enabledDots = dots || true;

    return (
      <div className={cx(className, styles.container)}>
        { enabledDots && <Dots size={items.length} currentIndex={currentIndex} onChange={this.handleDot}/>}
        <SliderItem currentItem={currentItem}/>
      </div>
    )
  }
}

Slider.propTypes = {
  className: PropTypes.string,
  dots: PropTypes.bool,
  items: PropTypes.array,
  interval: PropTypes.number
}

export default Slider;