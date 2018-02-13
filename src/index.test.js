import lib from './';

describe('lib', () => {
  it('returns hello world', () => {
    expect(lib.createVisualization()).toEqual('Hello World');
  })
});
