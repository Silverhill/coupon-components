import React, { Component } from 'react'

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'

import { Menu } from '../src';

const options = [
  {
    label: 'Delete',
    iconName: 'IoWifi'
  },
  {
    label: 'Edit',
    iconName: 'IoBug'
  }
]

const story = storiesOf('Molecules/Menu', module)

story.add('Basic menu',
  withInfo(`
    description or documentation about my component
  `)(
    () => <Menu options={options} onChange={action('Click option')} isOpen={action('isOpen')} />
  )
);

story.add('Left menu',
  withInfo(`
    description or documentation about my component
  `)(
    () => <Menu options={options} leftMenu onChange={action('Click option')} />
  )
);

story.add('Custom icon name',
  withInfo(`
    We can change the props of our icon with iconOptions prop.
    iconOptions allow to pass the own props of the component Icon.
  `)(
    () =>
      <Menu
        iconOptions={{
          name: 'FaWifi',
          size: 40
        }}
        options={options}
        onChange={action('Click option')}
      />
  )
);

class DynamicMenu extends Component {
  state = {
    menuOpen: false,
  }

  menuIsOpen = (isOpen) => {
    this.setState({ menuOpen: isOpen });
  }

  render() {
    const { menuOpen } = this.state;
    const currentIcon = menuOpen ? 'FaChevronDown' : 'FaChevronUp';

    return (
      <Menu
        iconOptions={{ name: currentIcon, size: 14 }}
        options={options}
        isOpen={this.menuIsOpen}
      />
    )
  }
}

story.add('Dynamic Icons',
  withInfo(`
    We can change the props of our icon with iconOptions prop.
    iconOptions allow to pass the own props of the component Icon.

    ~~~javascript
    class DynamicMenu extends Component {
      state = {
        menuOpen: false,
      }

      menuIsOpen = (isOpen) => {
        this.setState({ menuOpen: isOpen });
      }

      render() {
        const { menuOpen } = this.state;

        const currentIcon = menuOpen ? 'FaChevronDown' : 'FaChevronUp'

        return (
          <Menu
            iconOptions={{ name: currentIcon, size: 14 }}
            options={options}
            isOpen={this.menuIsOpen}
          />
        )
      }
    }
    ~~~
  `)(
    () => <DynamicMenu />
  )
);
