import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { Cupon } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Molecules/Cupon', module)
story.addDecorator(withKnobs);

const pizzaHut = {
  maker: {
    image: 'https://aalfredosalinas.files.wordpress.com/2010/09/pizza-hut-logo1.jpg',
    cupons: 125
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
    cupons: 345
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
    cupons: 1
  },
  cupon: {
    image: 'http://ideasmakemarket.com/wp-content/uploads/2013/02/184292_587742674586648_553621982_n.jpg',
    date: '11 Feb - 20 May 2017',
    promo: 'Orden Gratis Festin de Pollo ',
    address: 'C.C La Pradera, patio de comidas'
  }
}

story.add('Basic Cupon',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Cupon</h4>
          <div style={{width: '320px'}}>
            <Cupon data={pizzaHut} onClick={action('Click Cupon!')}/>
          </div>
        </Section>
      </div>
    )
  )
);

story.add('Disabled Cupon',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Cupon</h4>
          <div style={{width: '320px'}}>
            <Cupon data={starbucks} onClick={action('Click Cupon!')} disabled={ boolean('Disabled', true) }/>
          </div>
        </Section>
      </div>
    )
  )
);

story.add('Gold Cupon',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Cupon</h4>
          <div style={{width: '320px'}}>
            <Cupon data={kfc} onClick={action('Click Cupon!')} gold={true}/>
          </div>
        </Section>
      </div>
    )
  )
);

