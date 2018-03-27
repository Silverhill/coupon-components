import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from 'Atoms/Typography';

import styles from './Slider.css';
import * as palette from 'Styles/palette.css';

const cx = classNames.bind(styles)

class SliderItem extends Component {
  state = {
    fade: false,
  }

  //TODO: Migrar a react-transition-group cuando se utilicen animaciones avanzadas en otros componentes
  async componentWillReceiveProps() {
    await this.setState({fade: true });

    setTimeout(() => {
      this.setState({ fade: false });
    }, 500)
  }

  render() {
    const { currentItem } = this.props;
    const { fade } = this.state;

    let stylesComponent = currentItem.image ? {backgroundImage: `url(${currentItem.image})`} : {};
    return (
      <div className={cx(styles.imageContainer, { fade })} style={stylesComponent}>
        <div className={cx(styles.footer)}>
          { currentItem.title &&
            <Typography.Title bold style={{color: palette.whiteColor, padding: '15px 10px 0px 10px'}}>
              {currentItem.title}
            </Typography.Title>
          }
          { currentItem.description &&
            <Typography.Text light style={{color: palette.whiteColor, padding: '0px 10px 15px 10px'}}>
              {currentItem.description}
            </Typography.Text>
          }
        </div>
      </div>
    );
  }
}

SliderItem.propTypes = {
  currentItem: PropTypes.object
}


export default SliderItem;