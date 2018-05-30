
import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Section from './helpers/Section';
import styles from 'Styles/palette.css';

const story = storiesOf('Palette', module)

const Color = ({ color, name }) => (
  <div>
    <div style={{ width: 200, height: 40, background: color }}/>
    <small>{name}</small>
  </div>
)

story.add('All Palette Colors',
  withInfo()(
    () => (
      <div>
        <Section>
          {(Object.keys(styles) || []).map((key, i) => {
            return <Color key={`color-${key}-${i}`} color={styles[key]} name={key}/>
          })}
        </Section>
      </div>
    )
  )
);
