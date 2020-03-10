export default function (num: number, base: number, chr: string): string {
  var len = (String(base || 10).length - String(num).length) + 1;
  return len > 0
    ? new Array(len).join(chr || '0') + num
    : String(num);
}