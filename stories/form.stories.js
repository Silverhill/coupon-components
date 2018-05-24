import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Form, InputBox, Button } from '../src';
import Section from './helpers/Section';

import styles from './helpers/styles.css'

const story = storiesOf('Molecules/Form', module)

const data = {
  email: '',
  zip: '',
  tickets: ''
}

story.add('Simple Form',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Simple Form</h4>
          <div style={{ width: '750px' }}>
            <Form onSubmit={action('on Submit!')}>
              <InputBox
                className={styles.customClassInput}
                name="email"
                placeholder="E - Mail"
                shape="pill"
                value={data.email}
                type="email"
                minLength="6"
                required />
              <InputBox
                className={styles.customClassInput}
                name="zipcode"
                placeholder="ZIP Code"
                shape="pill"
                value={data.zip}
                type="text"
                maxLength="5"
                required />
              <InputBox
                className={styles.customClassInput}
                name="otro31"
                placeholder="Número de Tickets"
                shape="pill"
                value={data.tickets}
                minLength="6"
                type="number"
                required />
              <Button shape="pill"
                gradient
                type="submit"
                text="Enviar" />
            </Form>
          </div>
        </Section>
      </div>
    )
  )
);

class CustomForm extends Component {
  state = {
    callActionForm: false,
    form: {},
  }

  onChange = (ev) => {
    const field = { [ev.target.name]: ev.target.value };

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        ...field,
      }
    }));
  }

  forceSubmit = () => {
    this.form.forceSubmit();
  }

  render() {
    return (
      <div>
        <h4>Custom Form</h4>
        <Form
          onSubmit={action('on Submit')}
          onChange={this.onChange}
          ref={ref => this.form = ref}>
          <InputBox
            className={styles.customClassInput}
            name="email"
            placeholder="E - Mail"
            shape="pill"
            value={data.email}
            type="email"
            minLength="6"
            required />
          <InputBox
            className={styles.customClassInput}
            name="zipcode"
            placeholder="ZIP Code"
            shape="pill"
            value={data.zip}
            type="text"
            maxLength="5"
            required />
          <InputBox
            className={styles.customClassInput}
            name="otro31"
            placeholder="Número de Tickets"
            shape="pill"
            value={data.tickets}
            minLength="6"
            type="number"
            required />
        </Form>
        <Button shape="pill"
          gradient
          text="External Button"
          onClick={this.forceSubmit}
        />
      </div>
    );
  }
}

story.add('Form with button external',
  withInfo()(
    () => (
      <Section>
        <div style={{ width: '750px' }}>
          <CustomForm />
        </div>
      </Section>
    )
  )
);
