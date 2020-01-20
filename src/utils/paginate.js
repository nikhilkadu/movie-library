import _ from "lodash";

export function paginate(items, pageSize, currentPage) {
  const start = (currentPage - 1) * pageSize;

  return _(items)
    .slice(start)
    .take(pageSize)
    .value();
}
