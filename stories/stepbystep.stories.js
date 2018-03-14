import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StepByStep } from '../src';

const story = storiesOf('Molecules/StepByStep', module)

const steps = [
  {
    id: 0,
    label: 'First Step',
    icon: 'FaImage',
    tooltip: 'Touch me First.!'
  },
  {
    id: 1,
    label: 'Second Step',
    icon: 'FaGroup',
    tooltip: 'Touch me Second.!'
  },
  {
    id: 2,
    label: 'Third Step',
    icon: 'FaCreditCard',
    tooltip: 'Touch me Third.!'
  }
]

story.add('Step by Step',
  withInfo()(
    () =>
    <div style={{width: '750px'}}>
      <StepByStep steps={steps} onChange={action('OnChange Step!')}/>
    </div>
  )
);