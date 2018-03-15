import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { StepByStep } from '../src';

const story = storiesOf('Molecules/StepByStep', module)
story.addDecorator(withKnobs);

story.add('Basic Step by Step',
  withInfo()(
    () =>
    <div style={{width: '750px'}}>
      <StepByStep
        steps={[
          { id: 0, label: 'First Step', icon: 'FaImage', active: boolean('Activo 1', false) },
          { id: 1, label: 'Second Step', icon: 'FaGroup', tooltip: 'Touch me.!', active:  boolean('Activo 2', false) },
          { id: 2, label: 'Third Step', icon: 'FaCreditCard', active:  boolean('Activo 3', false) }
        ]}
        onChange={action('OnChange Step!')}
      />
    </div>
  )
);

// Inplementation example

const data = [
  { id: 0, label: 'First Step', icon: 'FaImage', active: true },
  { id: 1, label: 'Second Step', icon: 'FaGroup', tooltip: 'Touch me.!', active: false },
  { id: 2, label: 'Third Step', icon: 'FaCreditCard', active: false }
];

class StepByStepWithContainer extends Component {
  state = {
    steps: [],
    currentStep: {},
  }

  componentWillMount() {
    const { steps } = this.props;
    this.setState({ steps, currentStep: steps[0] });
  }

  handleStepsChange = (currentStep) => {
    const { steps } = this.state;

    const newSteps = steps.map(step => {
      step.active = false;
      if(step.label === currentStep.label) step.active = true;
      return step;
    });

    this.setState({ currentStep: currentStep, steps: newSteps });
  }

  renderContent = (currentStep) => {
    switch (currentStep.id) {
      case 0:
        return <h1>Primer Paso</h1>;
      case 1:
        return <h1>Segundo Paso</h1>;
      case 2:
        return <h1>Tercer Paso</h1>;
      default:
        break;
    }
  }

  render() {
    const { steps, currentStep } = this.state;
    return (
      <div>
        <StepByStep steps={steps} onChange={this.handleStepsChange} />
        {this.renderContent(currentStep)}
      </div>
    );
  }
}

story.add('Step by Step as Tabs',
  withInfo(`
    ~~~js
    class StepByStepWithContainer extends Component {
      state = {
        steps: [],
        currentStep: {},
      }

      componentWillMount() {
        const { steps } = this.props;
        this.setState({ steps, currentStep: steps[0] });
      }

      handleStepsChange = (currentStep) => {
        const { steps } = this.state;

        const newSteps = steps.map(step => {
          step.active = false;
          if(step.label === currentStep.label) step.active = true;
          return step;
        });

        this.setState({ currentStep: currentStep, steps: newSteps });
      }

      renderContent = (currentStep) => {
        switch (currentStep.id) {
          case 0:
            return <h1>Primer Paso</h1>;
          case 1:
            return <h1>Segundo Paso</h1>;
          case 2:
            return <h1>Tercer Paso</h1>;
          default:
            break;
        }
      }

      render() {
        const { steps, currentStep } = this.state;
        return (
          <div>
            <StepByStep steps={steps} onChange={this.handleStepsChange} />
            {this.renderContent(currentStep)}
          </div>
        );
      }
    }
    ~~~
  `)(
    () =>
    <div style={{width: '750px'}}>
      <StepByStepWithContainer steps={data} />
    </div>
  )
);
