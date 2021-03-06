import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Icon } from '../src';
import Section from './helpers/Section';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
const story = storiesOf('Atoms/Icon', module)

story.add('Simple Icon',
  withInfo()(
    () =>(
      <div>
        <Icon name='IoUniversity' />
        <Icon name='IoBug' />
        <Icon name='GoRocket' />
        <Icon name='MdWifi' />
        <Icon name='TiCode' />
        <Icon name='FaChild' />
        <Icon name='CpTicket' />
        <Icon name='FaChild' disabled />
      </div>
    )
  )
);

story.add('Icon with diferent color',
  withInfo()(
    () =>(
      <div>
        <Icon name='IoUniversity' color='rgba(55, 0, 0, 0.5)' />
        <Icon name='MdWifi' color='#3BA3F8' />
        <Icon name='TiCode' color='purple' />
      </div>
    )
  )
);

story.add('Icon with diferent size',
  withInfo()(
    () =>(
      <div>
        <Icon name='IoUniversity' color='rgba(55, 0, 0, 0.5)' size={10} />
        <Icon name='MdWifi' color='#3BA3F8' size={20} />
        <Icon name='TiCode' color='purple' size={30} />
        <Icon name='CpTicket' color='purple' size={50} />
      </div>
    )
  )
);

story.add('Icon with custom styles',
  withInfo()(
    () =>(
      <div>
        <Section style={{display: 'flex', padding: 20, alignItems: 'flex-start'}}>
          <Icon name='MdWifi' color='#3BA3F8' size={20} style={{marginRight: 20, marginTop: 10}} />
          <Icon name='TiCode' color='purple' size={30} style={{marginRight: 20, marginTop: 20}} />
          <Icon name='TiCode' size={30} color='#FFFF' style={{padding: 10, backgroundColor: '#3BA3F8', borderRadius: '50%'}} />
          <Icon name='CpTicket' color='purple' size={50} style={{padding: 10, backgroundColor: '#3BA3F8', borderRadius: '50%'}}/>
        </Section>
      </div>
    )
  )
);

story.add('Icon with event',
  withInfo()(
    () =>(
      <div>
        <Section style={{display: 'flex', padding: 20, alignItems: 'flex-start'}}>
          <Icon name='IoUniversity' color='purple' size={20} onClick={action('Click Icon!')} />
          <Icon name='IoUniversity' color='purple' size={20} onClick={action('Click Icon!')} disabled />
          <Icon name='CpTicket' color='pink' size={30} onClick={action('Click Icon!')} style={{padding: 10, backgroundColor: 'black', borderRadius: '50%'}}/>
        </Section>
      </div>
    )
  )
);

