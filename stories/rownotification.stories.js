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
  }
}

story.add('Simple Row',
  withInfo()(
    () =>
    <div style={{width: '750px', borderTop:'1px solid #c7c7c7', borderBottom:'1px solid #c7c7c7'}}>
      <RowNotification
        name={data.user.name}
        image={data.user.image}
        email={data.user.email}
        dateCoupon={data.coupon.date}
        codeCoupon={data.coupon.code}
        onClick={action('Click Row!')}/>
    </div>
  )
);
