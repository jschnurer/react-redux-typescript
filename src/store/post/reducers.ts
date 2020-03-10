import cloneDeep from "lodash/cloneDeep";
import findIndex from "lodash/findIndex";
import {
  PostState,
  PostActionTypes,
  POSTS_RECEIVED,
  START_FETCHING_POSTS,
  STOP_FETCHING_POSTS,
  COMMENTS_RECEIVED,
} from './types'

const initialState: PostState = {
  posts: [],
  isFetching: false,
  fetchedAll: false,
}

export function postReducer(
  state = initialState,
  action: PostActionTypes
): PostState {
  switch(action.type) {
    case POSTS_RECEIVED: {
      let newState = cloneDeep(state);
      
      if(action.payload.length > 1) {
        newState.fetchedAll = true;
      }

      action.payload.forEach(post => {
        let ix = findIndex(newState.posts, p => p.id === post.id);
        if (ix > -1) {
          if (newState.posts[ix].comments) {
            let comments = newState.posts[ix].comments;
            newState.posts[ix] = post;
            newState.posts[ix].comments = comments;
          }
          newState.posts[ix] = post;
        } else {
          newState.posts.push(post);
        }
      });

      newState.posts = newState.posts.sort((a, b) => a.title < b.title ? -1 : 1);

      return newState;
    }
    case START_FETCHING_POSTS: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case STOP_FETCHING_POSTS: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case COMMENTS_RECEIVED: {
      let newState = cloneDeep(state);
      let post = newState.posts.find(x => x.id === action.postId);
      if(!post) {
        return state;
      }

      post.comments = action.comments;
      return newState;
    }
    default: {
      return state;
    }
  }
}