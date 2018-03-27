import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Slider.css'
import * as palette from 'Styles/palette.css'
import Typography from 'Atoms/Typography'

const cx = classNames.bind(styles)

class Slider extends Component {
  state = {
    items: [],
    currentItem: {},
  }

  componentWillMount() {
    const { items } = this.props;
    this.setState({ items, currentItem: items[0] });
  }

  handleItemChange = (currentItem) => {
    const { items } = this.state;

    const newItems = items.map(item => {
      item.active = false;
      if(item.id === currentItem.id) item.active = true;
      return item;
    });

    this.setState({ currentItem: currentItem, steps: newItems });
  }

  render () {
    const { className } = this.props;
    const { items, currentItem } = this.state;
    let stylesComponent = currentItem.image ? {backgroundImage: `url(${currentItem.image})`} : {};

    setTimeout(() => {
      this.handleItemChange(currentItem);
      console.log('cambio', currentItem.id)
    }, 3000);

    return (
      <div className={cx(className, styles.container)} style={stylesComponent}>
        <div className={cx(styles.dotsContainer)}>
          {items && items.map((item) => {
            let isActive = item.active;
            return (
              <div className={cx(styles.dot, {isActive})}/>
            );
          })}
        </div>
        <div className={cx(styles.footer)}>
          <Typography.Title bold style={{color: palette.whiteColor, padding: '15px 10px 0px 10px'}}>
            {currentItem.title}
          </Typography.Title>
          <Typography.Text light style={{color: palette.whiteColor, padding: '0px 10px 15px 10px'}}>
            {currentItem.description}
          </Typography.Text>
        </div>
      </div>
    )
  }
}

Slider.propTypes = {
  className: PropTypes.string,
  dots: PropTypes.bool,
  arrows: PropTypes.bool,
  items: PropTypes.array,
  interval: PropTypes.number
}

export default Slider;