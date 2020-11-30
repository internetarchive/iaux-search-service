/**
 * The Result is a container for a response.
 *
 * It contains an optional success result which is generic and can be anything depending on
 * the context, or an Error or subclass of an error.
 *
 * This is modeled after Swift's Result type:
 * https://developer.apple.com/documentation/swift/result
 */
export class Result<T, E extends Error> {
  success?: T;

  error?: E;

  constructor(success?: T, error?: E) {
    this.success = success;
    this.error = error;
  }
}
