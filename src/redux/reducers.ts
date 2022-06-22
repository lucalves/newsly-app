import {GET_NEWS_FEED} from './actions';

// Create a initial state with empty array

const initialState = {
  newsFeed: [],
};

// Reducer to get feed news

const feedReducer = (
  state = initialState,
  action: {type: String; payload: any},
) => {
  switch (action.type) {
    case GET_NEWS_FEED:
      return {...state, newsFeed: action.payload};
    default:
      return state;
  }
};

export default feedReducer;
