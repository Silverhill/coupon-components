import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'

import { Menu } from '../src';

const options = [
  {
    label: 'Delete',
    iconName: 'IoWifi'
  },
  {
    label: 'Edit',
    iconName: 'IoBug'
  }
]

const story = storiesOf('Molecules/Menu', module)

story.add('Basic menu',
  withInfo(`
    description or documentation about my component
  `)(
    () => <Menu options={options} onChange={action('Click option')} />
  )
);

story.add('Left menu',
  withInfo(`
    description or documentation about my component
  `)(
    () => <Menu options={options} leftMenu onChange={action('Click option')} />
  )
);

