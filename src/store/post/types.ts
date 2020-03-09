export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostState {
  posts: Post[]
}

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const PUT_ALL_POSTS = 'PUT_ALL_POSTS';

interface FetchAllPostsAction {
  type: typeof FETCH_ALL_POSTS
}

interface FetchPostAction {
  type: typeof FETCH_POST,
  meta: {
    postId: number
  }
}

interface PutAllPosts {
  type: typeof PUT_ALL_POSTS,
  payload: Post[]
}

export type PostActionTypes = FetchAllPostsAction | FetchPostAction | PutAllPosts;