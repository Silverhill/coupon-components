import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { InputFile } from '../src';

const story = storiesOf('Atoms/InputFile', module)


story.add('Basic Input File',
  withInfo()(
    () =>
    <div style={{width: '250px'}}>
      <InputFile/>
    </div>
  )
);