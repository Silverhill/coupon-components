import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import { Avatar } from '../src';

const story = storiesOf('Atoms/Avatar', module)

story.add('Avatar with custom size',
  withInfo(`
    Implementation for basic Avatar with custom size width
  `)(
    () => (
      <div>
        <Section style={{display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
          <div style={{width: '100px', textAlign:'center'}}>
            <Avatar image='https://i.pinimg.com/originals/11/0f/00/110f0057f178a5f1357925aad67a9dd4.png' />
            <h5>100px</h5>
          </div>
          <div style={{width: '75px', textAlign:'center'}}>
            <Avatar image='https://i.pinimg.com/564x/bc/c8/10/bcc8102f42e58720355ca02d833c204b.jpg' />
            <h5>75px</h5>
          </div>
          <div style={{width: '50px', textAlign:'center'}}>
            <Avatar image='https://i.pinimg.com/564x/94/8d/f7/948df7f8e38277fc6e665ef9b2a79b45.jpg' />
            <h5>50px</h5>
          </div>
          <div style={{width: '25px', textAlign:'center'}}>
            <Avatar image='https://i.pinimg.com/564x/df/ba/63/dfba6384ad4d33d5967d600df5cc1319.jpg' />
            <h5>25px</h5>
          </div>
        </Section>
      </div>
    )
  )
);
