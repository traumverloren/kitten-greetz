import * as actions from '../index'

describe('actions', () => {
  it('should create an action to send a message', () => {
    const text = 'oh hai, kitteh'
    const expectedAction = {
      type: 'PRESS_BUTTON',
      isSubmitted: true,
      id: 0,
      text
    }
    expect(actions.sendGreeting(text)).toEqual(expectedAction)
  })
})
