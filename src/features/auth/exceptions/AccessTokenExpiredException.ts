export class AccessTokenExpiredException extends Error {
  constructor() {
    super();
    this.message = 'Access token expired.';
    this.name = 'AccessTokenExpiredException';
  }
}
