import { addParameters, configure } from '@storybook/react';
import theme from './theme'

// storybook styles
import './styles.scss'

addParameters({
  options: { theme },
});

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  // Force the introduction to load first!
  require('../src/storybook/introduction/index.stories.js');
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
