import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Slider } from '../src';

const story = storiesOf('Molecules/Slider', module)
const items = [
  {
    id: 0,
    title: 'Ingresa tu promoción',
    description: 'Many people understand the concept of passive solar'+
    'for heating a home. Fewer realize it can be used in to cook food and sterilize water.',
    image: 'https://i.ytimg.com/vi/mEBFswpYms4/maxresdefault.jpg'
  },
  {
    id: 1,
    title: 'Gana mas en tu negocio',
    description: 'Ingresa tus promociones en cada campaña',
    image: 'https://www.goodfood.com.au/content/dam/images/h/0/f/a/q/i/image.related.wide'+
    'Landscape.940x529.h0fa4n.png/1515456591895.jpg'
  },
  {
    id: 2,
    title: 'Consigue más consumidores',
    description: 'Crea tus cupones y incrementa tus ventas.',
    image: 'https://res.cloudinary.com/simpleview/image/upload/c_limit,f_auto,h_1200,'+
    'q_75,w_1200/v1/clients/pensacola/5Seafood_a02cf72f-a540-429f-868c-977de095e977.jpg'
  }
];

story.add('Basic Slider',
  withInfo()(
    () =>
    <div style={{width: '500px', height: '500px'}}>
      <Slider items={items}/>
    </div>
  )
);