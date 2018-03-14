import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './StepByStep.css';
import Icon from 'Atoms/Icon'
import Tooltip from 'Atoms/Tooltip'

const cx = classNames.bind(styles)

class StepByStep extends Component {
  state = {
    currentState: {}
  }

  render () {
    const { className, steps } = this.props;
    return (
      <div className={cx(className)}>
        {steps && steps.map((step) => {
          let iconName = step.icon || 'FaCheck'
          let tooltipContent = step.tooltip || ''

          return (
            <Tooltip content={tooltipContent} direction="top">
              <div className={styles.line}/>
              <Icon name={iconName} size={15} className={styles.itemIcon} />
            </Tooltip>
          )
        })}
      </div>
    )
  }
}

StepByStep.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.array,
  onChange: PropTypes.func
}

export default StepByStep;