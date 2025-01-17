'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-83fa2c4e.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["esn-popover.cjs",[[1,"esn-popover",{"active":[32],"fadingState":[32],"toggleShowState":[64]}]]],["esn-app-grid.cjs",[[1,"esn-app-grid",{"serializedApplications":[1,"serialized-applications"]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
