let nextMessageId = 0

export const sendGreeting = (message) => {
  return {
    type: 'PRESS_BUTTON',
    isSubmitted: true,
    id: nextMessageId++,
    text: message
  }
}
