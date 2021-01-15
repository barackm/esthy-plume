import _ from "lodash";

export default function paginate(index, pageItem, pageCount) {
  const startIndex = (pageItem - 1) * pageCount;

  return _(index).slice(startIndex).take(pageCount).value();
}
