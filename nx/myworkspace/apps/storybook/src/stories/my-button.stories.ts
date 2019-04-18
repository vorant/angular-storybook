import { storiesOf, moduleMetadata } from '@storybook/angular';
import { MyButtonComponent } from '@myworkspace/ui';

storiesOf('MyButtonComponent', module)
    .addParameters({ jest: ['my-button.component'] })
    .addDecorator(
        moduleMetadata({
            declarations: [MyButtonComponent]
        })
    )
    .add('My button Angular component', () => ({
        component: MyButtonComponent,
        props: {
            text: 'Hello Button'
        }
    }))
    .add('My button template', () => ({
        template:
            '<myworkspace-my-button [text]="text"></myworkspace-my-button>',
        props: {
            text: 'WoW'
        }
    }));
