export class SessionNotFoundException extends Error {
  constructor() {
    super();
    this.message = 'Session not found.';
    this.name = 'SessionNotFoundException';
  }
}
