import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { RoundButton } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Atoms/RoundButton', module)

story.add('Disabled Button',
  withInfo()(
    () => <RoundButton onClick={action('clicked')} icon="FaArrowRight" disabled />
  )
);

story.add('Custom Color',
  withInfo()(
    () => <RoundButton onClick={action('clicked')} icon="FaArrowRight" color="baseGreen" />
  )
);

story.add('Custom Size',
  withInfo()(
    () => <RoundButton onClick={action('clicked')} icon="FaArrowRight" size="small"/>
  )
);