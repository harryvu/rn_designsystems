import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'

storiesOf('Button', module)
    .add('with background red', () => 
        <Button color="white" bg="red">Hello World</Button>
    )
    .addWithJSX('with background purple',() => (
        <Button color="white" bg="purple" children="Hello with children" />
    )
    );