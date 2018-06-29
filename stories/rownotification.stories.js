import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { RowNotification } from '../src';

const story = storiesOf('Molecules/RowNotification', module)

const data = {
  user: {
    image: 'https://i.pinimg.com/originals/11/0f/00/110f0057f178a5f1357925aad67a9dd4.png',
    name: 'Jhon Snow'
  },
  coupon: {
    date: '07 Nov 2017',
    code: 12341234
  },
  campaign: {
    title: '2x1'
  }
}

story.add('Simple Row',
  withInfo()(
    () =>
    <div style={{width: '330px'}}>
      <RowNotification
        user={data.user}
        coupon={data.coupon}
        campaign={data.campaign}
        onClick={action('Click Row!')}
        onClose={action('Close Row!')}/>
    </div>
  )
);
