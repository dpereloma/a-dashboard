export interface RequestPagination {
  /**
   * Items per page
   */
  size?: number;
  /**
   * Items start from
   */
  index?: number;
  /**
   * Page number
   */
  page?: number;
}

/**
 * Get params for api pagination.
 *
 * @param pagination - Pagination properties
 * @param defaultSize - Default items per page
 */
export function requestPagination(
  pagination?: RequestPagination,
  defaultSize?: number,
) {
  let index = 1;
  console.log('111', pagination);
  if (pagination?.page && pagination.page > 0) {
    index = pagination.page;
  }

  if (pagination?.index) {
    // eslint-disable-next-line prefer-destructuring
    index = pagination.index;
  }

  const size = pagination?.size ?? defaultSize ?? 1;

  return { index, size };
}
