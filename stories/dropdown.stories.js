import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import { Dropdown, DropdownTrigger, DropdownContent, Button, Cupon, Avatar } from '../src';


const story = storiesOf('Molecules/Dropdown', module)

const starbucks = {
  maker: {
    image: 'https://pbs.twimg.com/profile_images/968173455580397568/Qe0pSZTk_400x400.jpg',
    cupons: 345
  },
  cupon: {
    image: 'https://assets3.thrillist.com/v1/image/2439237/size/gn-gift_guide_variable_c.jpg',
    date: '11 Feb - 20 May 2017',
    promo: 'Enjoy 50% off any Starbucks drink',
    address: '901 S Miami Ave #106, Miami, FL 33130, EE. UU.'
  }
}

story.add('Dropdown onClick',
  withInfo(`
    description or documentation about my component
  `)(
    () => (
      <div>
        <Section>
          <Dropdown>
            <DropdownTrigger>
              <Button onClick={action('clicked')} text="TEST" shape="pill" color="baseGreen" />
            </DropdownTrigger>
            <DropdownContent>
              <div className="dropdown-template">
                <h4>leninnnnn</h4>
                <h4>cappaaaa</h4>
                <h4>leninnnnn</h4>
              </div>
            </DropdownContent>
          </Dropdown>
        </Section>
      </div>
    )
  )
);

story.add('Dropdown onHover',
  withInfo(`
    description or documentation about my component
  `)(
    () => (
      <div>
        <Section>
          <Dropdown>
            <DropdownTrigger>
              <h4>Preview Coupon</h4>
            </DropdownTrigger>
            <DropdownContent>
              <div  style={{width: "300px"}}>
                <Cupon data={starbucks} onClick={action('Click Cupon!')} disabled={true}/>
              </div>
            </DropdownContent>
          </Dropdown>
        </Section>
      </div>
    )
  )
);
