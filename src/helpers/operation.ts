export interface Operation<T> {
  isWorking: boolean,
  errorMessage?: string,
  payload?: T,
}