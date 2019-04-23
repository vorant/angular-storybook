import deprecate from 'util-deprecate';

import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from './src/defaults';
import { default as withViewport } from './src/withViewport';

const configureViewport = deprecate(() => {},
'configureViewport is no longer supported, use .addParameters({ viewport }) instead');

exports.configureViewport = configureViewport;
exports.DEFAULT_VIEWPORT = DEFAULT_VIEWPORT;
exports.INITIAL_VIEWPORTS = INITIAL_VIEWPORTS;
exports.withViewport = withViewport;