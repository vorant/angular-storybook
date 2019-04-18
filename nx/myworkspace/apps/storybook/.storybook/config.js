import { configure, addDecorator } from '@storybook/angular';
import { withTests } from '@storybook/addon-jest';

import results from '../jest-test-results.json';

addDecorator(
  withTests({
    results,
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
  })
);

const req = require.context('../src/stories', true, /\.stories\.ts$/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);