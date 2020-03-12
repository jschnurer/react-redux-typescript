import { Post } from "../../store/post/types";
import formatDate from "../../utils/parseDate";
import { PostComment } from "../../store/comment/types";
import { User } from "../../types/userTypes";
import padLeft from "../../utils/padLeft";

const url = "https://my-json-server.typicode.com/jschnurer/json-placeholder";

class JsonApi {
  public async fetchAllPosts(): Promise<Post[]> {
    return fetch(`${url}/posts`)
      .then(res => res.json())
      .then(res => res.map((post: any) => formatPost(post)));
  }

  public async fetchPost(id: number): Promise<Post | null> {
    return fetch(`${url}/posts/${id}`)
      .then(res => {
        if (res.status === 404) {
          return null;
        }
        return res.json();
      })
      .then(post => post ? formatPost(post) : null);
  }

  public async createNewPost(post: Post): Promise<Post> {
    let backendPost: any = { ...post };

    if (post.time) {
      backendPost.time = post.time?.getUTCFullYear() + '-'
        + padLeft(post.time?.getUTCMonth(), 10, '0') + '-'
        + post.time?.getUTCDate() + ' '
        + padLeft(post.time?.getUTCHours(), 10, '0') + ':'
        + padLeft(post.time?.getUTCMinutes(), 10, '0') + ':'
        + padLeft(post.time?.getUTCSeconds(), 10, '0') + 'Z';
    }

    return fetch(`${url}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(backendPost),
    })
      .then(res => res.json())
      .then(returnedPost => formatPost(returnedPost));
  }

  public async fetchComments(postId: number): Promise<PostComment[]> {
    return fetch(`${url}/posts/${postId}/comments`)
      .then(res => res.json())
      .then(res => res.map((comment: any) => formatComment(comment)));
  }

  public async fetchUser(userId: string): Promise<User> {
    return fetch(`${url}/users/${userId}`)
      .then(res => res.json())
      .then(user => formatUser(user));
  }
}

export default new JsonApi();

function formatPost(post: any): Post {
  return {
    id: post.id,
    userId: post.userId,
    title: post.title,
    body: post.body,
    time: formatDate(post.time),
  }
}

function formatComment(comment: any): PostComment {
  return {
    id: comment.id,
    body: comment.body,
    postId: comment.postId,
    userId: comment.userId,
    time: formatDate(comment.time),
  }
}

function formatUser(user: any): User {
  return {
    id: user.id,
    joinDate: formatDate(user.joinDate),
    blurb: user.blurb
  }
}