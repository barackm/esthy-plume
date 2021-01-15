export default function convertNumber(number) {
  return number >= 1000 ? `${number / 1000}K` : number;
}
