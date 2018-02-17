import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Notification } from '../src';

const story = storiesOf('Atoms/Notification', module)

story.add('Simple Notification',
  withInfo()(
    () => <Notification description="Description del contenido"/>
  )
);

story.add('Notification with title',
  withInfo()(
    () => <Notification title="Informacion General" description="Description del contenido" />
  )
);

story.add('Notification with actions',
  withInfo()(
    () => {
    const actions = [
      {
        label: 'details',
        component: <a href="/details">Ver Detalles</a>
      },{
        label: 'other',
        component: <a href="/other">Ver Otros</a>
      }
    ];

    return <Notification title="Informacion General" description="Description del contenido" actions={actions}/>
    }
  )
);

