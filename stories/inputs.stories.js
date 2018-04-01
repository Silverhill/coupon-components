import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';
import Section from './helpers/Section';
import { InputBox } from '../src';
import { InputNested } from '../src';

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
          <InputBox type='text' placeholder='Input with label' labelText='I am a label' description='I am a description'/>
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
                    shape='pill'/>
        </Section>
      </div>
    )
  )
);

story.add('Nested Inputs',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <InputNested labelText="Some text"></InputNested>
    ~~~

  `)(
    () => (
      <div style={{width: 600}}>
        <Section >
          <InputNested>
            < InputBox type='text' placeholder='Input 1' />
            < InputBox type='text' placeholder='Input 2' />
            < InputBox type='text' placeholder='Input 3' />
          </InputNested>
        </Section>
        <Section>
          <InputNested labelText='Please fill the form'>
            < InputBox type='number' placeholder='Day' />
            < InputBox type='number' placeholder='Month' />
            < InputBox type='number' placeholder='Year' />
          </InputNested>
        </Section>
        <Section>
          <InputNested labelText='Please fill the form' description='Todos los campos son obligatorios'>
            < InputBox type='number' placeholder='Day' />
            < InputBox type='number' placeholder='Month' />
            < InputBox type='number' placeholder='Year' />
          </InputNested>
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
