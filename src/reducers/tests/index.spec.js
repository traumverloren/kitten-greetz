import reducer from '../index';

describe('greeting reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
        isSubmitted: false,
        messages: []
      })
  })

  it('should handle PRESS_BUTTON', () => {
    expect(
      reducer(undefined, {
        type: 'PRESS_BUTTON',
        isSubmitted: true,
        text: 'oh hai',
        id: 0
      })
    ).toEqual(
      {
        isSubmitted: true,
        messages: [
          {
            id: 0,
            text: 'oh hai',
          }
        ]
      }
    )

    expect(
      reducer(
        {
          isSubmitted: true,
          messages: [
            {
              id: 0,
              text: 'oh hai',
            }
          ]
        },
        {
          type: 'PRESS_BUTTON',
          isSubmitted: true,
          text: 'kthxbye kitteh',
          id: 1
        }
      )
    ).toEqual(
      {
        isSubmitted: true,
        messages: [
          {
            id: 0,
            text: 'oh hai',
          },
          {
            id: 1,
            text: 'kthxbye kitteh',
          }
        ]
      }
    )
  })
})
