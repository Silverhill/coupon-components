import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { StepByStep } from '../src';

const story = storiesOf('Molecules/StepByStep', module)
story.addDecorator(withKnobs);

story.add('Step by Step',
  withInfo()(
    () =>
    <div style={{width: '750px'}}>
      <StepByStep steps={[
        { label: 'First Step', icon: 'FaImage', active: boolean('Activo1', false)},
        { label: 'Second Step', icon: 'FaGroup', tooltip: 'Touch me.!', active: boolean('Activo2', false)},
        { label: 'Third Step', icon: 'FaCreditCard', active: boolean('Activo3', false)}
      ]} onChange={action('OnChange Step!')}/>
    </div>
  )
);