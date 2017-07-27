import { FETCH_POSTS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS: {
      let mapped = {};
      action.payload.data.forEach(post => mapped[post.id] = post);
      return mapped;
    }
    default: {
      return state;
    }
  }
}
