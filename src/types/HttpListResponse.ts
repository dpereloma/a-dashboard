export type HttpListResponse<T extends string, R> = {
  [key in T]: R[] | null;
} & {
  total: number;
  index: number;
};
