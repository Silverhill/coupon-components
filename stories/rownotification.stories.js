import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { RowNotification } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Molecules/RowNotification', module)

const data = {
  user: {
    image: 'https://i.pinimg.com/originals/11/0f/00/110f0057f178a5f1357925aad67a9dd4.png',
    name: 'Jhon Snow'
  },
  cupon: {
    date: '07 Nov 2017',
    codigo: 12341234
  }
}

story.add('Simple Row',
  withInfo()(
    () => <RowNotification data={data}/>
  )
);
