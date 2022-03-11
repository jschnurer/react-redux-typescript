export async function throwIfResponseError(response: Response) {
  if (!response.ok) {
    throw new Error(`${response.statusText}: ${await response.text()}`);
  }
}