import { User } from "./UsersApi";

export function formatUser(obj: any): User {
  return {
    id: Number(obj?.id),
    name: obj.name?.toString() || "",
    username: obj.username?.toString() || "",
    email: obj.email?.toString() || "",
    website: obj.website?.toString() || "",
  };
}