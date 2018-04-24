import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import { Cover } from '../src';

const story = storiesOf('Molecules/Cover', module)

const data = {
  leftLabel: "Address",
  leftText: "13-24 AV 4 Illinois - 32 Monaco Street",
  rightLabel: "Starbucks",
  rightText: "Starbucks",
  image: "https://sg-everydayonsales-infomartglobal.netdna-ssl.com/wp-content/uploads/2017/10/Starbucks-Festive-beverages-Promotion.jpg",
  logo: "https://pbs.twimg.com/profile_images/968173455580397568/Qe0pSZTk_400x400.jpg",
}

story.add('Cover with logo',
  withInfo(`
    Implementation for basic cover with background color
  `)(
    () => (
      <div>
        <Section>
          <Cover
            status="Closed"
            logo={data.logo}
            leftLabel={data.leftLabel}
            leftText={data.leftText}
            rightLabel="Company"
            rightText={data.rightText}
            backgroundColor="#00643b"
            stylesStatus= {
              {
                color: 'white',
                backgroundColor: 'red'
              }
            }
          />
        </Section>
        <Section>
          <Cover
            logo={data.logo}
            rightLabel="Company"
            rightText={data.rightText}
            backgroundColor="#f7f7f7"
          />
        </Section>
      </div>
    )
  )
);

story.add('Cover with background',
  withInfo(`
    Implementation cover with background and status
  `)(
    () => (
      <div>
        <Section>
          <Cover
            status="Active"
            rightLabel="coupons"
            rightText="300"
            image={data.image}
            leftLabel={data.leftLabel}
            leftText={data.leftText}
            stylesStatus= {
              {
                color: 'white',
                backgroundColor: '#00643b'
              }
            }
          />
        </Section>
      </div>
    )
  )
);

story.add('Cover background and logo',
  withInfo(`
    Implementation cover with background and logo
  `)(
    () => (
      <div>
        <Section>
          <Cover
            image="http://mouse.latercera.com/wp-content/uploads/2017/11/starbucks-900x600.jpg"
            status="Open"
            logo={data.logo}
            leftLabel={data.leftLabel}
            leftText={data.leftText}
            rightText={data.rightText}
            stylesStatus= {
              {
                color: 'white',
                backgroundColor: '#dfbf85'
              }
            }
          />
        </Section>
      </div>
    )
  )
);
