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
            imgName: 'fe47363f-f9f0-477f-8ee3-b67a424d56db.png'
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
            imgName: 'fe47363f-f9f0-477f-8ee3-b67a424d56db.png',
            share: 'https://share.goabstract.com/670876ae-f767-467a-8bd6-f2c119cb3068'
        }
    }
);
