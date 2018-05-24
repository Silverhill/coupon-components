import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Form, InputBox, Button } from '../src';
import Section from './helpers/Section';

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
            <Form submit={action('Click Cupon!')}>
              <div>
                <InputBox
                  name="email"
                  placeholder="E - Mail"
                  shape="pill"
                  value={data.email}
                  type="email"
                  minLength="6"
                  required />
                <div className="invalid-feedback"></div>
              </div>
              <div>
                <InputBox
                  name="zipcode"
                  placeholder="ZIP Code"
                  shape="pill"
                  value={data.zip}
                  type="text"
                  maxLength="5"
                  required />
                <div className="invalid-feedback"></div>
              </div>
              <div>
                <InputBox
                  name="otro31"
                  placeholder="Número de Tickets"
                  shape="pill"
                  value={data.tickets}
                  minLength="6"
                  type="number"
                  required />
                <div className="invalid-feedback"></div>
              </div>
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
    console.log('form', this.state.form);
  }

  forceSubmit = () => {
    this.form.forceSubmit();
  }

  render() {
    return (
      <div>
        <h4>Custom Form</h4>
        <Form
          submit={action('Click Cupon!')}
          onChange={this.onChange}
          ref={ref => this.form = ref}
        >
          <div>
            <InputBox
              name="email"
              placeholder="E - Mail"
              shape="pill"
              value={data.email}
              type="email"
              minLength="6"
              required />
            <div className="invalid-feedback"></div>
          </div>
          <div>
            <InputBox
              name="zipcode"
              placeholder="ZIP Code"
              shape="pill"
              value={data.zip}
              type="text"
              maxLength="5"
              required />
            <div className="invalid-feedback"></div>
          </div>
          <div>
            <InputBox
              name="otro31"
              placeholder="Número de Tickets"
              shape="pill"
              value={data.tickets}
              minLength="6"
              type="number"
              required />
            <div className="invalid-feedback"></div>
          </div>
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
      <div style={{ width: '750px' }}>
        <CustomForm />
      </div>
    )
  )
);
