const reducer = (state = { isSubmitted: false, messages: [] }, action) => {

  switch(action.type){
    case 'PRESS_BUTTON':
      return {
        isSubmitted: action.isSubmitted,
        messages: [...state.messages, {id: action.id, text: action.text}]
      };
    default:
      return state;
  }
};

export default reducer
