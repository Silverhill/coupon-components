import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Section from './helpers/Section';
import { Tooltip, Card, Icon, Button, Typography } from '../src'


const story = storiesOf('Atoms/Tooltip', module)

const tooltipContent = 'Hola WOW!';

story.add('Basic Tooltip',
  withInfo()(
    () => (
      <Section style={{ marginTop: '50px', paddingLeft: '50px' }}>

        <div style={{ display: 'flex', alignItems: 'center' }}>

          <div style={{ marginRight: '50px' }}>
            <Tooltip content={tooltipContent} direction="bottom">
              <button>Hola!</button>
            </Tooltip>
          </div>

          <div style={{ marginRight: '50px' }}>

          </div>

          <div style={{ marginRight: '50px' }}>
            <Tooltip content={tooltipContent} direction="top">
              <button>Hola!</button>
            </Tooltip>
          </div>

          <div style={{ marginRight: '250px' }}>
            <Tooltip content={tooltipContent} direction="right">
              <button>Hola!</button>
            </Tooltip>
          </div>

          <div style={{ marginRight: '50px' }}>
            <Tooltip content={tooltipContent} direction="left">
              <button>Hola!</button>
            </Tooltip>
          </div>

        </div>

      </Section>
    )
  )
);

story.add('With diferent elements',
  withInfo()(
    () => (
      <Section style={{ marginTop: '50px', paddingLeft: '50px' }}>

        <div style={{ display: 'flex', alignItems: 'center' }}>

          <div style={{ marginRight: '50px' }}>
            <Tooltip content="En cards!" direction="bottom">
              <Card width='200px'>Hola!</Card>
            </Tooltip>
          </div>

          <div style={{ marginRight: '50px' }}>

          </div>

          <div style={{ marginRight: '50px' }}>
            <Tooltip content="WOW! Iconos también, con width custom" direction="top" width='500px'>
              <Icon name="IoUniversity" />
            </Tooltip>
          </div>

          <div style={{ marginRight: '250px' }}>
            <Tooltip content="Presioname!" direction="right">
              <Button
                text="Ingresar"
                shape="pill"
                size="small"
              />
            </Tooltip>
          </div>

        </div>

      </Section>
    )
  )
);

class TriggerTooltipExample extends Component {
  state = {
    isTooltipShowing: false,
  }

  toggleTooltip = () => {
    this.setState(prevState => ({
      isTooltipShowing: !prevState.isTooltipShowing,
    }));
  }

  render() {
    const { isTooltipShowing } = this.state;

    return (
      <Section style={{ marginTop: '50px', paddingLeft: '50px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '50px' }}>

            <Tooltip content={tooltipContent} direction="top" trigger={isTooltipShowing}>
              <Icon name="IoUniversity" />
            </Tooltip>

          </div>
          <Button
            text={ isTooltipShowing ? 'Ocultar Tooltip' : 'Mostrar Tooltip' }
            shape="pill"
            onClick={this.toggleTooltip}
          />
        </div>
      </Section>
    )
  }
}


story.add('Width triggers',
  withInfo(
    `
      #### Note:

      Just add \`trigger\` prop in <Tooltip /> component with boolean value.
      The boolean could be changed with any function.

      Example:

      \`\`\`javacript
      state = {
        showTooltip: false,
      }

      toggleTooltip = () => {
        this.setState(prevState => ({
          showTooltip: !prevState.showTooltip,
        }));
      }

      render() {
        const { showTooltip } = this.state;

        return (
          <div>
            <Tooltip content="WOW!" direction="top" trigger={showTooltip}>
              <Icon name="IoUniversity" />
            </Tooltip>

          </div>

          <Button
            text={ !showTooltip ? 'Mostrar Tooltip' : 'Ocultar Tooltip' }
            shape="pill"
            onClick={this.toggleTooltip}
          />
          </div>
        )
      }
      \`\`\`


      More info review the \`tooltip.stories.js\`.
    `
  )(
    () => <TriggerTooltipExample />
  )
);

