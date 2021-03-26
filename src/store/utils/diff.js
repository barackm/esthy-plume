import moment from "moment";

export default function (lastFetch) {
  return moment().diff(moment(lastFetch), "minutes");
}
