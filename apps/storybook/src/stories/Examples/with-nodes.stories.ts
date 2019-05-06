import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import * as notes from './README.md';

storiesOf('Examples| WithNones', module)
    .add(
        'With Markdown',
        withNotes(notes)(() => ({
            template: '<div>Open <b>Notes</b> tab above</div>',
            props: {
                text: ''
            }
        })),
        {
            notes
        }
    );
