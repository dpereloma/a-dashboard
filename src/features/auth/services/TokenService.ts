import { AuthConstants, AuthExceptions, AuthTypes } from '..';
import * as Services from '../../../services';

export class TokenService {
  static parse(token: string) {
    const tokenParts = token.split('.');
    return JSON.parse(atob(tokenParts[1])) as AuthTypes.TokenPayload;
  }

  static isExpired(expiresAt: string) {
    const now = new Date();
    const date = new Date(expiresAt);
    return now.getTime() > date.getTime();
  }

  static session() {
    return Services.storageService.getJson<AuthTypes.SessionToken>(
      AuthConstants.STORAGE_SESSION_KEY,
    );
  }

  static setSession(session: AuthTypes.SessionToken) {
    return Services.storageService.setJson(
      AuthConstants.STORAGE_SESSION_KEY,
      session,
    );
  }

  static accessToken() {
    const session = TokenService.session();

    if (!session) {
      throw new AuthExceptions.SessionNotFoundException();
    }
    if (
      !session.accessToken ||
      TokenService.isExpired(session.accessTokenExpiresAt)
    ) {
      throw new AuthExceptions.AccessTokenExpiredException();
    }

    return session.accessToken;
  }

  static refreshToken() {
    const session = TokenService.session();

    if (!session) {
      throw new AuthExceptions.SessionNotFoundException();
    }
    if (
      !session.refreshToken ||
      TokenService.isExpired(session.refreshTokenExpiresAt)
    ) {
      throw new AuthExceptions.RefreshTokenExpiredException();
    }

    return session.refreshToken;
  }

  static removeSession() {
    return Services.storageService.remove(AuthConstants.STORAGE_SESSION_KEY);
  }
}
