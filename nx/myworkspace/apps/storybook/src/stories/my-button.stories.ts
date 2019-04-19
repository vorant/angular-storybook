import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withInfo } from '@storybook/addon-info';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { MyButtonComponent } from '@myworkspace/ui';

storiesOf('MyButtonComponent', module)
    .addParameters({ jest: ['my-button.component'] })
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            declarations: [MyButtonComponent]
        })
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
