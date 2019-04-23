import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

storiesOf('Abstract | MyAbstract ', module)
    .add('Test abstract', () => ({
        component: Button,
        props: {
            text: 'My Button'
        }
    }));
