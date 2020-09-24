export const initialState = {
  score: 0,
  mistake: 0,
  currentRound: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'correctPick':
      return {
        score: state.score + 1,
        mistake: state.mistake,
        currentRound: state.currentRound + 1,
      };
    case 'incorrectPick':
      return {
        score: state.score,
        mistake: state.mistake + 1,
        currentRound: state.currentRound + 1,
      };
    case 'reset':
    default:
      return initialState;
  }
};
