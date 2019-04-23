// NOTE: loading addons using this file is deprecated!
// please use manager.js and preview.js files instead
// require('./dist/register');
import React from 'react';
import addons, { types } from '@storybook/addons';

import { ADDON_ID, PANEL_ID } from './src/constants';

import Tool from './src/Tool';
import MyPanel from './src/bottom-panel'

addons.register(ADDON_ID, api => {
  addons.add(ADDON_ID, {
    title: 'My Company / Abstract',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <Tool api={api} />,
  });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Abstract',
    render: ({ active }) => <MyPanel api={api} active={active} />
  });
});