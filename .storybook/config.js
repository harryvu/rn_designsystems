import { configure, setAddon, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx'

setAddon(JSXAddon);
addDecorator(withInfo); // Globally in your .storybook/config.js.

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
    require('./welcomeStory');
    req.keys().forEach(file => req(file));
}

configure(loadStories, module);