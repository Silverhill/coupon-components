import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import {
  Typography,
  Select
} from '../src';

const countries = [
  {key:'ec', value:'Ecuador'},
  {key:'pe', value:'Peru'},
  {key:'cl', value:'Colombia'},
  {key:'vn', value:'Venezuela'},
  {key:'cle', value:'Chile'},
  {key:'br', value:'Brazil'},
  {key:'jm', value:'Jamaica'},
  {key:'pr', value:'Paraguay'},
  {key:'ur', value:'Uruguay'},
  {key:'es', value:'España'}
];

const story = storiesOf('Molecules/Select', module)

story.add('Select basic',
  withInfo(`
    Simple select
  `)(
    () => (
      <div>
        <Section>
          <Select placeholder='Select a country' options={countries} selectedOption={action('selected option: ')}>
          </Select>
        </Section>
      </div>
    )
  )
);
