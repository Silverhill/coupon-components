import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import { Dropdown, DropdownTrigger, DropdownContent, Avatar } from '../src';


const story = storiesOf('Molecules/Dropdown', module)

story.add('Dropdown onClick',
  withInfo(`
    description or documentation about my component
  `)(
    () => (
      <div>
        <Section>
          <Dropdown>
            <DropdownTrigger>
              <div style={{display:'flex', alignItems:'center'}}>
                <Avatar image='https://mir-s3-cdn-cf.behance.net/project_modules/1400/316d6c36433989.571c87a695d14.png' borderColor='highlightNeutral' borderSize='2px'/>
                <h5 style={{paddingLeft:'10px'}}>Arya Stark</h5>
              </div>
            </DropdownTrigger>
            <DropdownContent>
              <div style={{textAlign:'center'}}>
                <h5>Arya's Kill List</h5>
                <ul style={{listStyleType:'none', padding:'0 10px'}}>
                  <li>Cersei Lannister</li>
                  <li>The Mountain</li>
                  <li>Walder Frey</li>
                  <li>Tywin Lannister</li>
                </ul>
              </div>
            </DropdownContent>
          </Dropdown>
        </Section>
      </div>
    )
  )
);
