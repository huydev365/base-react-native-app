export default class FormatHelper {
  static twoIntegerDigits(value: number) {
    return ("0" + value).slice(-2);
  }

  static fourIntegerDigits(value: number) {
    return ("000" + value).slice(-4);
  }
}
