import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';
import styles from './helpers/styles.css'

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

story.add('Custom Panel',
  withInfo()(
    () => (
      <div>
        <Section>
          <Panel className={styles.section}
                classNameHeader={styles.warning}
                classNameContainer={styles.panelContainer}
                headerProps={{title: "Simple Panel - Props" }}>
            <Card>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum molestias in ab, dicta vitae distinctio! Sed dolores amet, voluptate voluptatum accusantium architecto quas numquam, suscipit sit est deleniti porro!
            </Card>
          </Panel>
        </Section>
      </div>
    )
  )
);
