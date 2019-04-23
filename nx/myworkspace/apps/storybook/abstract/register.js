// NOTE: loading addons using this file is deprecated!
// please use manager.js and preview.js files instead
// require('./dist/register');
import React from 'react';
import addons, { types } from '@storybook/addons';

import { ADDON_ID } from './src/constants';

import Tool from './src/Tool';

addons.register(ADDON_ID, api => {
  addons.add(ADDON_ID, {
    title: 'My Company / Abstract',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <Tool api={api} />,
  });
});