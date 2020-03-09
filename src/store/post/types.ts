export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostState {
  posts: Post[]
}

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_POST = 'GET_POST';

interface GetAllPostsAction {
  type: typeof GET_ALL_POSTS
}

interface GetPostAction {
  type: typeof GET_POST,
  meta: {
    postId: number
  }
}

export type PostActionTypes = GetAllPostsAction | GetPostAction;