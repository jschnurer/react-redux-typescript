import { throwIfResponseError } from "../apiHelpers";
import { formatPost } from "./postFormatters";

class PostsApi {
  /**
   * Call the server and retrieve the first 100 posts.
   * @param abortSignal An optional signal used to cancel the fetch request.
   * @returns Array of Posts returned from the API.
   */
  public getAllPosts = async (abortSignal?: AbortSignal): Promise<Post[]> => {
    // Call the API & wait for a response.
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`,
      {
        signal: abortSignal,
      });

    // If the response was not OK, throw an error.
    await throwIfResponseError(response);

    // Format the response json into the correct type.
    return (await response.json())
      .map(formatPost);
  };

  /**
   * Call the server and retrieve the specified post.
   * @param id The Id number of the post to load.
   * @param abortSignal An optional signal used to cancel the fetch request.
   * @returns The Post returned from the API.
   */
  public getPost = async (id: number, abortSignal?: AbortSignal): Promise<Post> => {
    // Call the API & wait for a response.
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.toString()}`,
      {
        signal: abortSignal,
      });

    // If the response was not OK, throw an error.
    await throwIfResponseError(response);

    // Format the response json into the correct type.
    return formatPost(await response.json());
  };
}

export default new PostsApi();

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}