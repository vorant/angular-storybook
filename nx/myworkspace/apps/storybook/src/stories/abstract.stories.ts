import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';
import { MyButtonComponent } from '@myworkspace/ui';

storiesOf('Abstract | MyAbstract ', module)
.addDecorator(
    moduleMetadata({
        declarations: [MyButtonComponent]
    })
)
.add(
    'Test abstract',
    () => ({
        component: MyButtonComponent,
        props: {
            text: 'Button'
        }
    }),
    {
        abstract: {
            backgroundPositionX: 0,
            backgroundPositionY: 0,
            share: 'https://share.goabstract.com/8bf534cf-5db0-4f4e-8655-a0be6faf1f34'
        }
    }
)
.add(
    'Big button',
    () => ({
        component: MyButtonComponent,
        props: {
            text: 'Big Button'
        }
    }),
    {
        abstract: {
            backgroundPositionX: 0,
            backgroundPositionY: 0,
            share: 'https://share.goabstract.com/670876ae-f767-467a-8bd6-f2c119cb3068'
        }
    }
);
