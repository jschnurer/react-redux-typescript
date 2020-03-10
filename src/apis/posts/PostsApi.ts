import { PostComment, Post } from "../../store/post/types";

const url = "https://my-json-server.typicode.com/jschnurer/json-placeholder";

class PostsApi {
  public async fetchAll(): Promise<Post[]> {
    return fetch(`${url}/posts`)
        .then(res => res.json())
        .then(res => res.map((post: any) => formatPost(post)));
  }

  public async fetch(id: number): Promise<Post> {
    return fetch(`${url}/posts/${id}`)
        .then(res => res.json())
        .then(post => formatPost(post));
  }

  public async fetchComments(postId: number): Promise<PostComment[]> {
    return fetch(`${url}/posts/${postId}/comments`)
      .then(res => res.json())
      .then(res => res.map((comment: any) => formatComment(comment)));
  }
}

export default new PostsApi();

function formatPost(post: any): Post {
  return {
    id: post.id,
    userId: post.userId,
    title: post.title,
    body: post.body,
    comments: null,
  }
}

function formatComment(comment: any): PostComment {
  return {
    id: comment.id,
    body: comment.body,
    postId: comment.postId,
    userId: comment.userId,
  }
}