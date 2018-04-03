import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { BasicRow } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Molecules/BasicRow', module)

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

const maker = {
  company: {
    image: 'https://i.pinimg.com/originals/11/0f/00/110f0057f178a5f1357925aad67a9dd4.png',
    name: 'Starbucks',
    direction: 'Downey 12-32 Av Mails'
  }
}

story.add('Simple Row',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>User Row</h4>
          <div style={{width: '750px', borderTop:'1px solid #c7c7c7', borderBottom:'1px solid #c7c7c7'}}>
            <BasicRow
              title={data.user.name}
              image={data.user.image}
              subtitle={data.user.email}
              label='Ultimo cupon utilizado'
              description={data.coupon.date}
              number={data.coupon.total}
              onClick={action('Click Row!')}
            />
          </div>
        </Section>
        <Section>
          <h4>Company Row</h4>
          <div style={{width: '750px', borderTop:'1px solid #c7c7c7', borderBottom:'1px solid #c7c7c7'}}>
            <BasicRow
              title={maker.company.name}
              image={'https://pbs.twimg.com/profile_images/968173455580397568/Qe0pSZTk_400x400.jpg'}
              subtitle={maker.company.direction}
              label='Promotion:'
              description='Mocaccino 10% less'
              number={0}
              onClick={action('Click Row!')}
            />
          </div>
        </Section>
        <Section>
          <h4>Custom Data</h4>
          <div style={{width: '750px', borderTop:'1px solid #c7c7c7', borderBottom:'1px solid #c7c7c7'}}>
            <BasicRow
              title={'KFC'}
              image={'http://www.dubaimap.mobi/logos/1346237029images.jpg'}
              subtitle={'Sucursal C.C La Pradera'}
              label='Total Tickets June:'
              number={'10k'}
              iconName='FaAreaChart'
              onClick={action('Click Row!')}
            />
          </div>
        </Section>
      </div>
    )
  )
);
