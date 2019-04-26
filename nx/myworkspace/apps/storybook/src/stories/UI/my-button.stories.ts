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
                    'https://share.goabstract.com/8bf534cf-5db0-4f4e-8655-a0be6faf1f34'
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
                    'https://share.goabstract.com/8bf534cf-5db0-4f4e-8655-a0be6faf1f34'
            }
        }
    )
    .add(
        'Active',
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
                    'https://share.goabstract.com/670876ae-f767-467a-8bd6-f2c119cb3068'
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
                    'https://share.goabstract.com/670876ae-f767-467a-8bd6-f2c119cb3068'
            }
        }
    );
