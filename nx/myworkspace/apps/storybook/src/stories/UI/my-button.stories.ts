import { storiesOf, moduleMetadata } from '@storybook/angular';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { MyButtonComponent } from '@myworkspace/ui';

storiesOf('UI | MyButton', module)
    .addDecorator(
        moduleMetadata({
            declarations: [MyButtonComponent]
        })
    )
    .addDecorator(withKnobs)
    .addParameters({ jest: ['my-button.component'] })
    .add(
        'Normal state',
        () => ({
            component: MyButtonComponent,
            props: {
                text: text('text', 'Button')
            }
        }),
        {
            abstract: {
                backgroundPositionX: 0,
                backgroundPositionY: 0,
                share:
                    'https://share.goabstract.com/5c87634d-7050-485b-87f7-430f3b241d9d'
            }
        }
    )
    .add(
        'Focused',
        () => ({
            component: MyButtonComponent,
            props: {
                text: text('text', 'Button')
            }
        }),
        {
            abstract: {
                backgroundPositionX: 0,
                backgroundPositionY: 0,
                share:
                    'https://share.goabstract.com/670876ae-f767-467a-8bd6-f2c119cb3068'
            }
        }
    )

    .add(
        'Hover',
        () => ({
            component: MyButtonComponent,
            props: {
                text: text('text', 'Button')
            }
        }),
        {
            abstract: {
                backgroundPositionX: 0,
                backgroundPositionY: 0,
                share:
                    'https://share.goabstract.com/aebd1462-8b6f-4e71-b2ab-8d8f12f79ab2'
            }
        }
    )
    .add(
        'Pressed',
        () => ({
            template:
                '<myworkspace-my-button [text]="text"></myworkspace-my-button>',
            props: {
                text: text('text', 'Button')
            }
        }),
        {
            abstract: {
                backgroundPositionX: 0,
                backgroundPositionY: 0,
                share:
                    'https://share.goabstract.com/1eee96a8-bc70-47fa-8b1d-de47e6b23eb2'
            }
        }
    )
    .add(
        'Disabled',
        () => ({
            component: MyButtonComponent,
            props: {
                text: text('text', 'Button')
            }
        }),
        {
            abstract: {
                backgroundPositionX: 0,
                backgroundPositionY: 0,
                share:
                    'https://share.goabstract.com/8e834258-5ecd-4118-807a-9c55a6a39f2b'
            }
        }
    );
