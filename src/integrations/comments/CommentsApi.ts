import { throwIfResponseError } from "../apiHelpers";
import { formatComment } from "./commentFormatters";

class CommentsApi {
  /**
   * Call the server and retrieve the comments for a specified post.
   * @param id The Id number of the post to load comments from.
   * @param abortSignal An optional signal used to cancel the fetch request.
   * @returns The Comments returned from the API.
   */
  public getCommentsForPost = async (postId: number, abortSignal?: AbortSignal): Promise<Comment[]> => {
    // Call the API & wait for a response.
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.toString()}/comments`,
      {
        signal: abortSignal,
      });

    // If the response was not OK, throw an error.
    await throwIfResponseError(response);

    // Format the response json into the correct type.
    return (await response.json())
      .map(formatComment);
  };
}

export default new CommentsApi();

export interface PostComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}