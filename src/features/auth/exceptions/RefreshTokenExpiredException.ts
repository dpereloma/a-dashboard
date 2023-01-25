export class RefreshTokenExpiredException extends Error {
  constructor() {
    super();
    this.message = 'Refresh token expired.';
    this.name = 'RefreshTokenExpiredException';
  }
}
