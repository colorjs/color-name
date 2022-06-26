import assert from 'node:assert';
import names from './index.js';

assert.deepEqual(names.red, [255,0,0]);
assert.deepEqual(names.aliceblue, [240,248,255]);
