import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Plan } from '../src';

const story = storiesOf('Molecules/Plan', module)

const data = {
  name: 'Plan Gold',
  total_coupon: 100,
  total_price: 50,
  caption: '$60 - Ahorra 15%'
}

story.add('Selected Plan',
  withInfo()(
    () =>
    <div style={{width: '250px'}}>
      <Plan data={data} selected={true} onClick={action('Click Row!')}/>
    </div>
  )
);

story.add('Unselected Plan',
  withInfo()(
    () =>
    <div style={{width: '250px'}}>
      <Plan data={data} selected={false} onClick={action('Click Row!')}/>
    </div>
  )
);

story.add('Disabled Plan',
  withInfo()(
    () =>
    <div style={{width: '250px'}}>
      <Plan data={data} selected={false} disabled={true} onClick={action('Click Row!')}/>
    </div>
  )
);