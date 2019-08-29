import { configure } from '@storybook/react';

// storybook styles
import './styles.scss'

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  // Force the introduction to load first!
  require('../src/storybook/introduction/index.stories.js');
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
