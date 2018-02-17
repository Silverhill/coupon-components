import React from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Section from './helpers/Section';

import { Avatar } from '../src';

const story = storiesOf('Atoms/Avatar', module)

story.add('Custom size',
  withInfo(`
    Implementation for basic Avatar with custom size width
  `)(
    () => (
      <div>
        <Section style={{display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
          <div style={{width: '100px', textAlign:'center'}}>
            <Avatar image='https://i.pinimg.com/originals/11/0f/00/110f0057f178a5f1357925aad67a9dd4.png' />
            <h5>100px</h5>
          </div>
          <div style={{width: '75px', textAlign:'center'}}>
            <Avatar image='https://i.pinimg.com/564x/bc/c8/10/bcc8102f42e58720355ca02d833c204b.jpg' />
            <h5>75px</h5>
          </div>
          <div style={{width: '50px', textAlign:'center'}}>
            <Avatar image='https://i.pinimg.com/564x/94/8d/f7/948df7f8e38277fc6e665ef9b2a79b45.jpg' />
            <h5>50px</h5>
          </div>
          <div style={{width: '25px', textAlign:'center'}}>
            <Avatar image='https://i.pinimg.com/564x/df/ba/63/dfba6384ad4d33d5967d600df5cc1319.jpg' />
            <h5>25px</h5>
          </div>
        </Section>
      </div>
    )
  )
);

story.add('With border and colors',
  withInfo(`
    Implementation for basic Avatar with border and custom colors from palette
  `)(
    () => (
      <div>
        <Section style={{display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
          <div style={{width: '100px', textAlign:'center'}}>
            <Avatar image='https://cdn.dribbble.com/users/600973/screenshots/1640127/7b4819237638866c446472e7406b15cf.jpg' borderColor='primaryColor'/>
            <h5>100px</h5>
          </div>
          <div style={{width: '75px', textAlign:'center'}}>
            <Avatar image='https://photos.smugmug.com/Events/Digital-Art-1/i-8j8nFzV/3/09584cb4/L/Daenerys%20and%20Drogon%20Poly%20Odins%20Iris%20W-L.jpg' borderColor='accentColorSecondary'/>
            <h5>75px</h5>
          </div>
          <div style={{width: '50px', textAlign:'center'}}>
            <Avatar image='https://mir-s3-cdn-cf.behance.net/project_modules/1400/316d6c36433989.571c87a695d14.png' borderColor='highlightNeutral'/>
            <h5>50px</h5>
          </div>
          <div style={{width: '25px', textAlign:'center'}}>
            <Avatar image='https://i.pinimg.com/564x/df/ba/63/dfba6384ad4d33d5967d600df5cc1319.jpg' borderColor='neutralColorMedium'/>
            <h5>25px</h5>
          </div>
        </Section>
      </div>
    )
  )
);
