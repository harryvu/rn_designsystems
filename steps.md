1. Init the project
$ yarn init -y

2. Add dependencies
$ yarn add -D @storybook/react babel-core
$ yarn add react react-dom

3. Make two directories
$ mkdir .storybook src

4. Create the config.js under .storybook folder
$ touch .storybook/config.js

5. Create the Button.js component 

6. Create stories for the Button component

7. Now run the storybook then you should see stories about your Button component
$ npm run storybook

8. Create the .storybook/welcomeStory.js and add to the config.js => you should see the Welcome story in the browser

9. Add the storybook-addon-jsx
$ yarn add -D @storybook/addons storybook-addon-jsx

10. To configure the addon, we're going to create a new file in the .storybook folder called addon.js

11. Modify the config.js
import { configure, setAddon } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

12. Use addWithJSX
.addWithJSX('with background purple', () => 
        <Button color="white" bg="purple" children="Hello with children" />
    );

13. Apply style to a React Storybook with the Info addon to turn stories into documentation
- install info addon
$ yarn add -D @storybook/addon-info

- add this to the Button.stories.js
import { withInfo } from '@storybook/addon-info'

.addWithJSX('with background purple',withInfo(
        `descriptive text for this story`
    ),(() => 
        <Button color="white" bg="purple" children="Hello with children" />
    ));

