import { a as patchEsm, b as bootstrapLazy } from './index-e06512a6.js';
var defineCustomElements = function (win, options) { return patchEsm().then(function () {
    return bootstrapLazy([["esn-popover", [[1, "esn-popover", { "active": [32], "fadingState": [32], "toggleShowState": [64] }]]], ["esn-app-grid", [[1, "esn-app-grid", { "serializedApplications": [1, "serialized-applications"] }]]]], options);
}); };
export { defineCustomElements };
