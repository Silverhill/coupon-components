import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Section from './helpers/Section';
import { Typography } from '../src'


const story = storiesOf('Atoms/Typography', module)

story.add('Title',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <Typography.Title>Text</Typography.Title>
    ~~~

  `)(
    () => (
      <div>
        <Section>
          <Typography.Title highlight>This is a cool title with highlight</Typography.Title>
          <Typography.Title secondary>This is a cool title with secondary color</Typography.Title>
          <Typography.Title style={{color: 'blue'}}>This is a cool title with custom styles</Typography.Title>
          <Typography.Title disabled>This is a cool disabled title</Typography.Title>
          <Typography.Title light>This is a cool light title</Typography.Title>
          <Typography.Title bold>This is a cool bold title</Typography.Title>
        </Section>

        <Section dark>
        <Typography.Title inverted>This is a cool inverted title</Typography.Title>
        </Section>
      </div>
    )
  )
);

story.add('Text',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <Typography.Text>Text</Typography.Text>
    ~~~

  `)(
    () => (
      <div>
        <Section>
          <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text highlight>highlight: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text secondary>secondary: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text lead>lead text: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text inline>inline text: Lorem ipsum dolor sit amet, <Typography.Text inline bold>consectetur adipisicing elit. Obcaecati sapiente</Typography.Text> maxime quis distinctio harum, delectus ipsam numquam <Typography.Text inline highlight>natus aperiam</Typography.Text>, recusandae amet!</Typography.Text>
          <Typography.Text style={{ color: 'blue' }}>style: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text disabled>disabled: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text error>error: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>

          <Section dark>
            <Typography.Text inverted>inverted: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum beatae laboriosam at, totam alias quisquam natus cupiditate doloribus veniam quidem, necessitatibus blanditiis suscipit libero recusandae officiis magnam. Laudantium, dignissimos.</Typography.Text>
          </Section>
        </Section>
      </div>
    )
  )
);

story.add('Small Text',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <Typography.Text>Text</Typography.Text>
    ~~~

  `)(
    () => (
      <div>
        <Section>
          <Typography.Text small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text small highlight>highlight: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text small secondary>secondary: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text small lead>lead text: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text small inline>inline text: Lorem ipsum dolor sit amet, <Typography.Text small inline bold>consectetur adipisicing elit. Obcaecati sapiente</Typography.Text> maxime quis distinctio harum, delectus ipsam numquam <Typography.Text inline highlight>natus aperiam</Typography.Text>, recusandae amet!</Typography.Text>
          <Typography.Text small style={{ color: 'blue' }}>style: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text small disabled>disabled: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>
          <Typography.Text small error>error: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente tempora provident repellat, vitae facilis quasi officiis dolorum enim maxime quis distinctio harum, delectus ipsam numquam natus aperiam, recusandae amet!</Typography.Text>

          <Section dark>
            <Typography.Text small inverted>inverted: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum beatae laboriosam at, totam alias quisquam natus cupiditate doloribus veniam quidem, necessitatibus blanditiis suscipit libero recusandae officiis magnam. Laudantium, dignissimos.</Typography.Text>
          </Section>
        </Section>
      </div>
    )
  )
);

story.add('Header',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <Typography.Header>Text</Typography.Header>
    ~~~

  `)(
    () => (
      <div>
        <Section>
          <Typography.Header>This is simple header</Typography.Header>
          <Typography.Header highlight>highlight: This is highlight header</Typography.Header>
          <Typography.Header secondary>secondary: This is a secondary header</Typography.Header>
          <Typography.Header disabled>disabled: This is a disabled header</Typography.Header>
          <Typography.Header light>lighter: This is a disabled header</Typography.Header>
          <Typography.Header bold>bold: This is a disabled header</Typography.Header>
          <Typography.Header style={{color: 'cornflowerblue'}}>style: This is a custom styled header</Typography.Header>

          <Section dark>
            <Typography.Header inverted>inverted: This is a inverted header</Typography.Header>
          </Section>
        </Section>
      </div>
    )
  )
);

story.add('Subtitle',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <Typography.Subtitle>Text</Typography.Subtitle>
    ~~~

  `)(
    () => (
      <div>
        <Section>
          <Typography.Subtitle>This is a disabled Subtitle</Typography.Subtitle>
          <Typography.Subtitle highlight>highlight: This is highlight Subtitle</Typography.Subtitle>
          <Typography.Subtitle secondary>secondary: This is a secondary Subtitle</Typography.Subtitle>
          <Typography.Subtitle disabled>disabled: This is a disabled Subtitle</Typography.Subtitle>
          <Typography.Subtitle light>lighter: This is a disabled Subtitle</Typography.Subtitle>
          <Typography.Subtitle bold>bold: This is a disabled Subtitle</Typography.Subtitle>
          <Typography.Subtitle style={{color: 'cornflowerblue'}}>style: This is a custom styled Subtitle</Typography.Subtitle>

          <Section dark>
            <Typography.Subtitle inverted>inverted: This is a inverted Subtitle</Typography.Subtitle>
          </Section>
        </Section>
      </div>
    )
  )
);

story.add('Label',
  withInfo(`
    description or documentation about my component, supports markdown

    ~~~js
    <Typography.Label>Text</Typography.Label>
    ~~~

  `)(
    () => (
      <div>
        <Section>
          <Typography.Label>This is a default Label</Typography.Label>
          <Typography.Label highlight>highlight: This is highlight Label</Typography.Label>
          <Typography.Label secondary>secondary: This is a secondary Label</Typography.Label>
          <Typography.Label disabled>disabled: This is a disabled Label</Typography.Label>
          <Typography.Label light>light: This is a disabled Label</Typography.Label>
          <Typography.Label bold>bold: This is a disabled Label</Typography.Label>
          <Typography.Label style={{color: 'cornflowerblue'}}>style: This is a custom styled Label</Typography.Label>

          <Section dark>
            <Typography.Label inverted>inverted: This is a inverted Label</Typography.Label>
          </Section>
        </Section>
      </div>
    )
  )
);
