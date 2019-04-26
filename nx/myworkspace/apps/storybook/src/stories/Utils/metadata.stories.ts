import { storiesOf, moduleMetadata } from '@storybook/angular';
import { InversePipe, TokenComponent } from '@myworkspace/ui';

storiesOf('Metadata|Combined', module)
  .addDecorator(
    moduleMetadata({
      imports: [],
      declarations: [TokenComponent],
      providers: [
        {
          provide: 'ITEMS',
          useValue: ['Joe', 'Jane'],
        },
        {
          provide: 'DEFAULT_NAME',
          useValue: 'Provider Name',
        },
      ],
    })
  )
  .add('Combined 1', () => ({
    template: `<myworkspace-token [name]="name"></myworkspace-token>`,
    props: {
      name: 'Prop Name',
    },
  }))
  .add('Combined 2', () => ({
    template: `<myworkspace-token [name]="name | inverse"></myworkspace-token>`,
    props: {
      name: 'Prop Name',
    },
    moduleMetadata: {
      declarations: [InversePipe],
    },
  }));