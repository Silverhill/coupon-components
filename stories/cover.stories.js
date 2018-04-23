import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import { Cover } from '../src';

const story = storiesOf('Atoms/Cover', module)

const data = {
  status: "abierto",
  leftLabel: "soy un label",
  leftText: "soy el texto",
  rightLabel: "label 2",
  rightText: "hola",
  image: "https://www.boxpark.co.uk/assets/Uploads/_resampled/FillWyIxOTIwIiwiMTA4MCJd/Bao-Bao-Holder3.jpg",
}

story.add('Basic cover',
  withInfo(`
    Implementation for basic cover with custom size width
  `)(
    () => (
      <div>
        <Section>
          <Cover
            status={data.status}
            leftLabel={data.leftLabel}
            leftText={data.leftText}
            rightLabel={data.rightLabel}
            rightText={data.rightText}
            image={data.image}
          />
        </Section>
        <Section>
          <Cover
            status={data.status}
            leftLabel={data.leftLabel}
            leftText={data.leftText}
            rightLabel={data.rightLabel}
            rightText={data.rightText}
            stylesStatus= {
              {
                color: 'white',
                backgroundColor: 'yellow'
              }
            }
          />
        </Section>
      </div>
    )
  )
);

