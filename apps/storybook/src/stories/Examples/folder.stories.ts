import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

storiesOf('Examples | My Folder / Sub folder / Sub sub folder / My Group', module)
    .add('Deep button', () => ({
        component: Button,
        props: {
            text: 'My Button',
        }
    }));
