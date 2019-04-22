import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';
// import withFoo from '../../abstract/src/index';

storiesOf('Abstract | MyAbstract ', module)
    // .addDecorator(withFoo)
    .add('Test abstract', () => ({
        component: Button,
        props: {
            text: 'My Button'
        },
        // myAddon: {
        //     data: 'this data is passed to the addon'
        // }
    }));
