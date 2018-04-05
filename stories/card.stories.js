import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Section from './helpers/Section';
import styles from './helpers/styles.css'

import { Card, Typography } from '../src';

const list = [
  {title: 'Matematica', description: 'Clases del Sr Peppe', url: '/task/3'},
  {title: 'Quimica', description: 'Clases del Sr Peppe', url: '/task/33'},
  {title: 'Lenguaje', description: 'Clases del Sr Peppe', url: '/task/22'}
]

const story = storiesOf('Atoms/Card', module)
story.addDecorator( withKnobs );

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum molestias in ab, dicta vitae distinctio! Sed dolores amet, voluptate voluptatum accusantium architecto quas numquam, suscipit sit est deleniti porro!";
const content = <Typography.Text>{text('Texto', loremIpsum)}</Typography.Text>

story.add('Cards with custom size',
  withInfo(`
    Implementation for basic Card with custom size using flex and width
  `)(
    () => (
      <div>
        <Section>
          <Card width={text('Custom width', '500px')}>
            {content}
          </Card>
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
            {content}
          </Card>
        </Section>
      </div>
    )
  )
);

story.add('Card with title',
  withInfo(`
    Implementation for basic Card
  `)(
    () => (
      <div>
        <Section style={{width: '300px'}}>
          <Card title="Campañas" subtitle="Activas">
            {content}
          </Card>
        </Section>
        <Section style={{width: '300px'}}>
          <Card title="My List">
            <ul>
              <li><Typography.Header>item 1</Typography.Header></li>
              <li><Typography.Header>item 2</Typography.Header></li>
              <li><Typography.Header>item 3</Typography.Header></li>
              <li><Typography.Header>item 4</Typography.Header></li>
            </ul>
          </Card>
        </Section>
      </div>
    )
  )
);


story.add('Card with custom class',
  withInfo(`
    Implementation with some class
  `)(
    () => (
      <div>
        <Section style={{width: '300px'}}>
          <Card
            subtitle="Think about this"
            classNameHeader={styles.customHeaderCard}
            classNameContent={styles.customContentCard}
            classNameCard={styles.customCard}>
            {content}
          </Card>
        </Section>
      </div>
    )
  )
);
