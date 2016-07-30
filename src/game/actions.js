/*
 * Action types
 */
export const CREATE_GAME = 'CREATE_GAME';

export const createGame = (data) => (
  {
    type: CREATE_GAME,
    data,
  }
)
