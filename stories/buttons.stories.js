import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button } from '../src';
import Section from './helpers/Section';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
const story = storiesOf('Atoms/Button', module)

story.add('Simple button with text',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <Button text='With Text' />
    ~~~

  `)(
    () => <Button onClick={action('clicked')} text="With Text" />
  )
);

story.add('Secondary button with text',
  withInfo()(
    () => <Button onClick={action('clicked')} text="Secondary Button"  color='secondaryColor' />
  )
);

story.add('Simple button with icon',
  withInfo(`
    Button with simple text and simple icon
    Add prefix Fa, Io, Md, Ti, Go, followed for the icon name.

    * Fa: FontAwesome
    * Io: Ionicons
    * Md: MaterialIcons
    * Ti: Typicon
    * Go: Octoicons


    Example: FaWifi, IoWifi

  `)(
    () => (
      <div>
        <Section>
          <Button leftIcon="FaWifi" onClick={action('clicked')} text="With Text" />
        </Section>

        <Section>
          <Button rightIcon="FaWifi" onClick={action('clicked')} text="With Text" />
        </Section>
      </div>
    )
  )
);

story.add('Pill button',
  withInfo()(
    () => <Button onClick={action('clicked')} text="Pill Button" shape="pill" />
  )
);

story.add('Gradient button',
  withInfo()(
    () => <Button onClick={action('clicked')} text="Ingresar" shape="pill" gradient />
  )
);

story.add('Custom Width',
  withInfo()(
    () => <Button onClick={action('clicked')} text="Ingresar" shape="pill" customWidth="25%" />
  )
);

story.add('Disabled Button',
  withInfo()(
    () => <Button onClick={action('clicked')} text="Ingresar" shape="pill" disabled customWidth="25%" />
  )
);

story.add('Custom Color',
  withInfo()(
    () => <Button onClick={action('clicked')} text="Ingresar" shape="pill" color="baseGreen" />
  )
);

story.add('Custom Size',
  withInfo()(
    () => <Button onClick={action('clicked')} text="Ingresar" shape="pill" size="small"/>
  )
);