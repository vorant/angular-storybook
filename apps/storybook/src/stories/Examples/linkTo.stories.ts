import { storiesOf, moduleMetadata } from '@storybook/angular';
import { linkTo } from '@storybook/addon-links';

storiesOf('Examples | LinkTo', module)
    .add('Go to My Button', () => ({
        template:
            '<button (click)="linkTo()">Go to MyButton component</button>',
        props: {
            linkTo: linkTo('UI | MyButton', 'Normal state')
        }
    }));
