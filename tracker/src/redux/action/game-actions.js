import uuid from 'uuid';

export const createGame = (game) => {
  game._id = uuid();
  return{
    type:'GAME_CREATE',
    payload: game,
  }
}

export const deleteGame = (game) => {
  return{
    type:'GAME_DELETE',
    payload: game,
  }
}

export const updateGame = (game) => {
  return{
    type:'Game_UPDATE',
    payload: game,
  }
}