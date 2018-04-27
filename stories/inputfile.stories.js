import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { InputFile, Icon} from '../src';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import styles from './helpers/styles.css'

const story = storiesOf('Atoms/InputFile', module)
story.addDecorator(withKnobs);

class ExampleInpuFileContainer extends Component {
  state = {
    file: {}
  }

  onChange = (ev, file) =>{
    this.setState({file});
  }

  render() {
    const { file } = this.state;

    let stylesImage;
    if(file.imagePreviewUrl) {
      stylesImage = { backgroundImage: `url(${file.imagePreviewUrl})`}
    };

    return (
      <InputFile updateFile={this.onChange}>
       <div className={styles.profile} style={stylesImage}/>
      </InputFile>
    );
  }
}

story.add('Basic Input File',
  withInfo()(
    () =>
    <div style={{width: '100px', height: '100px'}}>
      <InputFile updateFile={action('On Change')}>
        <Icon name='CpTicket' color='purple' size={50} style={{padding: 10, backgroundColor: '#3BA3F8', borderRadius: '50%'}}/>
      </InputFile>
    </div>
  )
);

story.add('Input File with Trigger',
  withInfo()(
    () =>
    <div style={{width: '100px', height: '100px'}}>
      <ExampleInpuFileContainer/>
    </div>
  )
);

story.add('Input File is loading',
  withInfo()(
    () =>
    <div style={{width: '100px', height: '100px'}}>
      <InputFile updateFile={action('On Change')} isLoading={boolean('isLoading', false)}>
        <Icon name='CpTicket' color='purple' size={50} style={{padding: 10, backgroundColor: '#3BA3F8', borderRadius: '50%'}}/>
      </InputFile>
    </div>
  )
);