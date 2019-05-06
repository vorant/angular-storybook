import { storiesOf, moduleMetadata } from '@storybook/angular';
import { InversePipe, TokenComponent } from '@myworkspace/ui';

storiesOf('Examples | Mock / Providers', module)
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
  .add('For story', () => ({
    template: `<myworkspace-token [name]="name"></myworkspace-token>`,
    props: {
      name: 'Prop Name',
    },
  }))
  .add('For story case', () => ({
    template: `<myworkspace-token [name]="name | inverse"></myworkspace-token>`,
    props: {
      name: 'Prop Name',
    },
    moduleMetadata: {
      declarations: [InversePipe],
    },
  })).add('Individual', () => ({
    // template: `<myworkspace-token [name]="name"></myworkspace-token>`,
    component: TokenComponent,
    props: {
      name: 'Individual ',
    },
    moduleMetadata: {
      imports: [],
      declarations: [TokenComponent],
      providers: [
        {
          provide: 'ITEMS',
          useValue: ['John Seena', 'Someone else'],
        },
        {
          provide: 'DEFAULT_NAME',
          useValue: 'Provider Name',
        },
      ],
    },
  }))



