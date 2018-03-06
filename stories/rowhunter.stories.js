import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { RowHunter } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Molecules/RowHunter', module)

const data = {
  user: {
    image: 'https://i.pinimg.com/originals/11/0f/00/110f0057f178a5f1357925aad67a9dd4.png',
    name: 'Jhon Snow',
    email: 'jhonsnow@winterfall.com'
  },
  coupon: {
    date: '19/12/2017',
    total: 50
  }
}

story.add('Simple Row',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Basic Row</h4>
          <div style={{width: '750px', borderTop:'1px solid #c7c7c7', borderBottom:'1px solid #c7c7c7'}}>
            <RowHunter
              name={data.user.name}
              image={data.user.image}
              email={data.user.email}
              dateLastCoupon={data.coupon.date}
              totalCoupons={data.coupon.total}
              onClick={action('Click Row!')}
            />
          </div>
        </Section>
      </div>
    )
  )
);
