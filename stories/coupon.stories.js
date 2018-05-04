import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { Coupon } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Molecules/Coupon', module)
story.addDecorator(withKnobs);

const pizzaHut = {
  maker: {
    image: 'https://aalfredosalinas.files.wordpress.com/2010/09/pizza-hut-logo1.jpg',
    cupons: '125',
    name: "Pizza Hut"
  },
  cupon: {
    image: 'https://i2.wp.com/food.thecookbk.com/wp-content/uploads/2017/10/pizza-hut.jpg?fit=800%2C600',
    date: '11 Feb - 20 May 2017',
    promo: 'Martes 2 x 1 en pizzas',
    address: '12-34 Downtown S.Q'
  }
}

const starbucks = {
  maker: {
    image: 'https://pbs.twimg.com/profile_images/968173455580397568/Qe0pSZTk_400x400.jpg',
    cupons: '345'
  },
  cupon: {
    image: 'https://assets3.thrillist.com/v1/image/2439237/size/gn-gift_guide_variable_c.jpg',
    date: '11 Feb - 20 May 2017',
    promo: 'Enjoy 50% off any Starbucks drink',
    address: '901 S Miami Ave #106, Miami, FL 33130, EE. UU.'
  }
}

const kfc = {
  maker: {
    image: 'http://www.dubaimap.mobi/logos/1346237029images.jpg',
    cupons: '1'
  },
  cupon: {
    image: 'http://ideasmakemarket.com/wp-content/uploads/2013/02/184292_587742674586648_553621982_n.jpg',
    date: '11 Feb - 20 May 2017',
    promo: 'Orden Gratis Festin de Pollo ',
    address: 'C.C La Pradera, patio de comidas'
  }
}

story.add('Basic Coupon',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Coupon</h4>
          <div style={{width: '320px'}}>
            <Coupon
              image={pizzaHut.cupon.image}
              logo={pizzaHut.maker.image}
              title={pizzaHut.cupon.promo}
              date={pizzaHut.cupon.date}
              address={pizzaHut.cupon.address}
              totalCoupons={pizzaHut.maker.cupons}
              onClick={action('Click Cupon!')}/>
          </div>
        </Section>
      </div>
    )
  )
);

story.add('Disabled Coupon',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Coupon</h4>
          <div style={{width: '320px'}}>
            <Coupon
              image={starbucks.cupon.image}
              logo={starbucks.maker.image}
              title={starbucks.cupon.promo}
              date={starbucks.cupon.date}
              address={starbucks.cupon.address}
              totalCoupons={starbucks.maker.cupons}
              onClick={action('Click Cupon!')}
              disabled={ boolean('Disabled', true) }/>
          </div>
        </Section>
      </div>
    )
  )
);

story.add('Gold Coupon',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Coupon</h4>
          <div style={{width: '320px'}}>
            <Coupon
              image={kfc.cupon.image}
              logo={kfc.maker.image}
              title={kfc.cupon.promo}
              date={kfc.cupon.date}
              address={kfc.cupon.address}
              totalCoupons={kfc.maker.cupons}
              onClick={action('Click Cupon!')}
              gold={true}/>
          </div>
        </Section>
      </div>
    )
  )
);

