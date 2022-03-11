import { PostComment } from "./CommentsApi";

export function formatComment(obj: any): PostComment {
  return {
    postId: Number(obj?.postId),
    id: Number(obj?.id),
    name: obj.name?.toString() || "",
    email: obj.email?.toString() || "",
    body: obj.body?.toString() || "",
  };
}