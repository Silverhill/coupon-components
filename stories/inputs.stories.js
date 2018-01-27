import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';
import Section from './helpers/Section';
import { InputBox } from '../src';

const story = storiesOf('Atoms/Inputs', module)

story.add('Basic Inputs',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <InputBox placeholder='Basic Input' />
    ~~~

  `)(
    () => (
      <div>
        <Section>
          <InputBox placeholder='Basic Input' />
          <InputBox resetOnEnter onEnter={action('Press Enter!')} placeholder='Press Enter' />
          <InputBox onEnter={action('Press Enter!')} placeholder='Press Enter but not reset input value' />
          <InputBox placeholder='Press other key!' onKeyPress={action('On Key pressed')} />
          <InputBox type='password' placeholder='Type your pass' />
          <InputBox id='basic-input' type='text' placeholder='On Change' onChange={action('On Change')} />
          <InputBox type='text' placeholder='Input with label' labelText='I am a label' />

          <div style={{width: 200, marginTop: 20}}>
            <InputBox placeholder='Input with width 200px' />
          </div>
        </Section>
      </div>
    )
  )
);

story.add('Basic pill input Box',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <InputBox shape='pill' />
    ~~~

  `)(
    () => (
      <div>
        <Section>
          <InputBox leftIcon='FaUser'
                    placeholder='Usuario'
                    shape='pill'
                    labelText='I am a label'/>
        </Section>
      </div>
    )
  )
);

story.add('Inputs With Icon',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <InputBox leftIcon='IoSearch' />
    ~~~

  `)(
    () => (
      <div>
        <Section style={{width: 400}}>

          <InputBox
            leftIconConfig={{color: 'red'}}
            leftIcon='IoSearch'
            placeholder='Left Icon...' />

          <InputBox
            rightIconConfig={{color: 'teal', customClass: 'customClass'}}
            rightIcon='IoSearch'
            placeholder='Right Icon...' />

          <InputBox
            rightIconConfig={{likePlaceholder: true}}
            rightIcon='IoSearch'
            leftIconConfig={{color: 'purple', customClass: 'customClass'}}
            leftIcon='MdWifi'
            placeholder='Both icons and right icon like placeholder' />

        </Section>
      </div>
    )
  )
);
