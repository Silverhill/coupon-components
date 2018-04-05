import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { Campaign } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Molecules/Campaign', module)
story.addDecorator(withKnobs);

const pizzaHut = {
  maker: {
    cupons: 125,
    hunted: 2
  },
  cupon: {
    date: '11 Feb - 20 May 2017',
    promo: 'Martes 2 x 1 en pizzas',
    address: '12-34 Downtown S.Q'
  }
}

const starbucks = {
  maker: {
    cupons: 345,
    hunted: 10
  },
  cupon: {
    date: '11 Feb - 20 May 2017',
    promo: 'Enjoy 50% off any Starbucks drink',
    address: '901 S Miami Ave #106, Miami, FL 33130, EE. UU.'
  }
}

story.add('Basic Campaign',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Campaign</h4>
          <div style={{width: '320px'}}>
            <Campaign
              title={pizzaHut.cupon.promo}
              date={pizzaHut.cupon.date}
              address={pizzaHut.cupon.address}
              totalCoupons={pizzaHut.maker.cupons}
              totalCouponsHunted={pizzaHut.maker.hunted}
            onClick={action('Click Campaign!')}/>
          </div>
        </Section>
      </div>
    )
  )
);

story.add('Selected Campaign',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Cupon</h4>
          <div style={{width: '320px'}}>
            <Campaign
              title={starbucks.cupon.promo}
              date={starbucks.cupon.date}
              address={starbucks.cupon.address}
              totalCoupons={starbucks.maker.cupons}
              totalCouponsHunted={pizzaHut.maker.hunted}
              onClick={action('Click Campaign!')}
              selected={ boolean('Selected', true) }/>
          </div>
        </Section>
      </div>
    )
  )
);


