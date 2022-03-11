import { Post } from "./PostsApi";

export function formatPost(obj: any): Post {
  return {
    id: Number(obj.id),
    userId: Number(obj.userId),
    title: obj.title?.toString() || "",
    body: obj.body?.toString() || "",
  };
}