import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Plan } from '../src';

const story = storiesOf('Molecules/Plan', module)

const data = {
  name: 'Plan Gold',
  total_coupon: 100,
  total_price: 50
}

story.add('Normal',
  withInfo()(
    () => <Plan data={data}/>
  )
);