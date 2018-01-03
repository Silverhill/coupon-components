import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';

setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
