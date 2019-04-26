import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs';
import { MyButtonComponent, InversePipe } from '@myworkspace/ui';

storiesOf('Pipes', module)
    .addDecorator(
        moduleMetadata({
            imports: [],
            schemas: [],
            declarations: [InversePipe],
            providers: []
        })
    )
    .add(
        'Inverse',
        () => ({
            template: `
            <div>Ordinary: <b>{{field}}</b></div>
            <div>Inverse: <b>{{field | inverse}}</b></div>
            `,
            props: {
                field: text('field', 'abcdefghigklmnopqrstuvwxyz')
            }
        }),
        {
            decorators: [withKnobs]
        }
    );
