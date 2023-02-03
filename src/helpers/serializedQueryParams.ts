export function serializedQueryParams(params: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(params).filter((entry) => entry[1] && entry[1] !== 'all'),
  );
}
