import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { HeaderBar } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Molecules/HeaderBar', module)

story.add('Simple Header',
  withInfo()(
    () => <HeaderBar title="Makers Section"/>
  )
);

story.add('Header with subtitle',
  withInfo()(
    () => <HeaderBar title="Informacion General" subtitle="Description del contenido"/>
  )
);

