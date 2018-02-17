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
  cupon: {
    date: '19/12/2017',
    total: 50
  }
}

story.add('Simple Row',
  withInfo()(
    () => <RowHunter data={data}/>
  )
);



