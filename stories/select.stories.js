import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';
import styles from './helpers/styles.css'

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

story.add('Custom Select',
  withInfo(`
    Simple select
  `)(
    () => (
      <div>
        <Section style={{width: '150px'}}>
          <Select placeholder='Select a country' labelText='City' options={countries} selectedOption={action('selected option: ')}>
          </Select>
        </Section>
      </div>
    )
  )
);

story.add('Custom Class',
  withInfo()(
    () => (
      <div>
        <Section style={{width: '150px'}}>
          <Select className={styles.section}
                placeholder='Select a country' labelText='City' options={countries} selectedOption={action('selected option: ')}>
          </Select>
        </Section>
      </div>
    )
  )
);
