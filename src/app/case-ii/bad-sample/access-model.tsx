export class AccessModel {
  constructor(private accessToken: string, private refreshToken: string) {}

  static new(accessToken: string, refreshToken: string): AccessModel {
    return new AccessModel(accessToken, refreshToken);
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }
}
