import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './StepByStep.css';
import Icon from 'Atoms/Icon';
import Tooltip from 'Atoms/Tooltip';

const cx = classNames.bind(styles);

class StepByStep extends Component {
  state = {
    currentStep:{}
  }

  componentWillMount() {
    const { steps } = this.props;
    let activeItem = steps.filter((step) => { return step.active});
    if(activeItem[0]) this.setState({ currentStep:  activeItem});
  }

  onPressIcon = (step) => {
    const { onChange } = this.props;
    const { currentStep } = this.state;
    if(onChange && (currentStep.label !== step.label)){
      onChange(step);
      this.setState({ currentStep: step });
    }
  }

  render () {
    const { className, steps } = this.props;
    return (
      <div className={cx(className, styles.container)}>
        <div className={styles.steps}>
          {steps && steps.map((step) => {
            let iconName = step.icon || 'FaCheck';
            let tooltipContent = step.tooltip || '';
            let isActive = step.active;
            const key = { key: step.label };

            const icon = <Icon name={iconName} size={15} className={cx(styles.itemIcon, {isActive})} onClick={() => this.onPressIcon(step)} />;

            if(tooltipContent) {
              return (
                <Tooltip {...key} content={tooltipContent} direction="bottom">
                  {icon}
                </Tooltip>
              )
            }

            return (
              <div {...key}>
                {icon}
              </div>
            );
          })}
        </div>
        <div className={styles.line}/>
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