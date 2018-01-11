import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import { Card } from '../src';

const list = [
  {title: 'Matematica', description: 'Clases del Sr Peppe', url: '/task/3'},
  {title: 'Quimica', description: 'Clases del Sr Peppe', url: '/task/33'},
  {title: 'Lenguaje', description: 'Clases del Sr Peppe', url: '/task/22'}
]

const story = storiesOf('Atoms/Card', module)

story.add('Cards with custom size',
  withInfo(`
    Implementation for basic Card with custom size using flex and width
  `)(
    () => (
      <div>
        <Section>
          <Card width={'400px'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum molestias in ab, dicta vitae distinctio! Sed dolores amet, voluptate voluptatum accusantium architecto quas numquam, suscipit sit est deleniti porro!
          </Card>
          <Card width={'30%'} height={'500px'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum molestias in ab, dicta vitae distinctio! Sed dolores amet, voluptate voluptatum accusantium architecto quas numquam, suscipit sit est deleniti porro!
          </Card>

          <div style={{display: 'flex'}}>
            <Card width={'20%'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum molestias in ab, dicta vitae distinctio! Sed dolores amet, voluptate voluptatum accusantium architecto quas numquam, suscipit sit est deleniti porro!
            </Card>
            <Card flex={1}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate neque in maxime cupiditate iste aut libero non, veniam deleniti blanditiis. Voluptas consequatur rerum quasi ullam impedit maxime placeat explicabo tempore.
            </Card>
          </div>
        </Section>
      </div>
    )
  )
);


story.add('Simple Card',
  withInfo(`
    Implementation for basic Card
  `)(
    () => (
      <div>
        <Section style={{width: '300px'}}>
          <Card>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum molestias in ab, dicta vitae distinctio! Sed dolores amet, voluptate voluptatum accusantium architecto quas numquam, suscipit sit est deleniti porro!
          </Card>
        </Section>
      </div>
    )
  )
);
