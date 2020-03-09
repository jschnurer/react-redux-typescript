import { Post } from "../../store/post/types";

class PostsApi {
  public async fetchAll(): Promise<Post[]> {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(res => res.map((post: any) => formatPost(post)));
  }

  public async fetch(id: number): Promise<Post> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(post => formatPost(post));
  }
}

export default new PostsApi();

function formatPost(post: any): Post {
  return {
    id: post.id,
    userId: post.userId,
    title: post.title,
    body: post.body,
  }
}