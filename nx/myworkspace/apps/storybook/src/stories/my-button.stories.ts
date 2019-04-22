import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withInfo } from '@storybook/addon-info';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { MyButtonComponent } from '@myworkspace/ui';
import { withNotes } from '@storybook/addon-notes';
import * as notes from './README.md';

storiesOf('MyButtonComponent', module)
    .addParameters({ jest: ['my-button.component'] })
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            declarations: [MyButtonComponent]
        })
    )
    .add(
        'With Markdown',
        withNotes(notes)(() => ({
            component: MyButtonComponent,
            props: {
                text: '😀 😎 👍 💯'
            }
        })),
        {
            notes
        }
    )
    .add('My button Angular component', () => ({
        component: MyButtonComponent,
        props: {
            text: text('text', 'Hello Storybook')
        }
    }))
    .add('My button template', () => ({
        template:
            '<myworkspace-my-button [text]="text"></myworkspace-my-button>',
        props: {
            text: 'WoW'
        }
    }));
