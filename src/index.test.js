var lib = require('./index.js');

describe('lib', function() {
  it('returns hello world', function() {
    expect(lib.createVisualization()).toEqual('Hello Viz');
  })
});