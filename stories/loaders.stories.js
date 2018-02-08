import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Section from './helpers/Section';
import { Preloader } from '../src';

const story = storiesOf('Atoms/Loaders', module)

story.add('Basic Loader',
  withInfo(`
    description or documentation about my component, supports markdown
  `)(
    () => (
      <div>
        <Section >
          <h4>Basic Loader</h4>
          <Preloader />
        </Section>
      </div>
    )
  )
);

story.add('Basic Loader with diferent size',
  withInfo(`
    description or documentation about my component, supports markdown
  `)(
    () => (
      <div>
        <Section >
          <h4>Basic Loader</h4>
          <Preloader size={40} />
          <Preloader size={80} />
          <Preloader size={120} />
        </Section>
      </div>
    )
  )
);

story.add('Basic Loader with custom color',
  withInfo(`
    description or documentation about my component, supports markdown
  `)(
    () => (
      <div>
        <Preloader
          color='red'
          size={80}
        />
      </div>
    )
  )
);
