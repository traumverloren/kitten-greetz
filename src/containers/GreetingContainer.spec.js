import React from 'react';

// I don't get it ?? This is fucking hard 😦
describe('GreetingContainer.js', () => {
  let wrapWithConnect;
  let connect;
  const expectedContainerElement = {};

  beforeEach(() => {
    jest.resetModules();
    wrapWithConnect = jest.fn(() => expectedContainerElement);
    connect = jest.fn(() => wrapWithConnect);

    jest.mock('react-redux', () => ({ connect }));
    jest.mock('../components/Greeting', () => (<div />));
  });

  it('should call connect', () => {
    require('./GreetingContainer');
    expect(connect).toBeCalled();
  });
})
