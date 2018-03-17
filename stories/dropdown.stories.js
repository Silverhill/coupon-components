import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import { Dropdown, Icon } from '../src';


const story = storiesOf('Molecules/Dropdown', module)

story.add('Basic Dropdown',
  withInfo(`
    description or documentation about my component
  `)(
    () => (
      <div>
        <Section>
          <Dropdown show={true}>
            <Icon name='TiCode' color='purple' />
            <div className="dropdown-template">
              <h4>leninnnnn</h4>
              <h4>leninnnnn</h4>
              <h4>leninnnnn</h4>
            </div>
          </Dropdown>
        </Section>
      </div>
    )
  )
);
