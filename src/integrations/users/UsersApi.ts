import { throwIfResponseError } from "../apiHelpers";
import { formatUser } from "./userFormatters";

class UsersApi {
  /**
   * Call the server and retrieve the specified user.
   * @param id The Id number of the user to load.
   * @param abortSignal An optional signal used to cancel the fetch request.
   * @returns The User returned from the API.
   */
  public getUser = async (id: number, abortSignal?: AbortSignal): Promise<User> => {
    // Call the API & wait for a response.
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id.toString()}`,
      {
        signal: abortSignal,
      });

    // If the response was not OK, throw an error.
    await throwIfResponseError(response);

    // Format the response json into the correct type.
    return formatUser(await response.json());
  };
}

export default new UsersApi();

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  website: string,
}