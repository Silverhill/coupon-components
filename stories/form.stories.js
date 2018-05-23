import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Form, InputBox, Button } from '../src';
import Section from './helpers/Section';

const story = storiesOf('Molecules/Form', module)

const data = {
  email: '',
  zip: '',
  tickets:''
}

story.add('Simple Form',
  withInfo()(
    () => (
      <div>
        <Section>
          <h4>Simple Form</h4>
          <div style={{width: '750px', borderTop:'1px solid #c7c7c7', borderBottom:'1px solid #c7c7c7'}}>
          <Form submit={action('Click Cupon!')}>
            <div>
              <InputBox
                name="email"
                placeholder="E - Mail"
                shape="pill"
                value={data.email}
                type="email"
                minLength="6"
                required/>
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
                required/>
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
                required/>
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
