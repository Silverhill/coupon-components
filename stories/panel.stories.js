import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import { Panel, Card } from '../src';

const story = storiesOf('Atoms/Panel', module)

story.add('Simple Panel',
  withInfo()(
    () => (
      <div>
        <Section>
          <Panel title="Simple Panel">
            <Card>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum molestias in ab, dicta vitae distinctio! Sed dolores amet, voluptate voluptatum accusantium architecto quas numquam, suscipit sit est deleniti porro!
            </Card>
          </Panel>
        </Section>
      </div>
    )
  )
);
