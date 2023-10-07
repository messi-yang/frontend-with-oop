type AccessDto = {
  accessToken: string;
  refreshToken: string;
};

export class AccessModel {
  constructor(private accessToken: string, private refreshToken: string) {}

  static new(accessToken: string, refreshToken: string): AccessModel {
    return new AccessModel(accessToken, refreshToken);
  }

  static parse(accessString: string): AccessModel {
    try {
      const accessDto = JSON.parse(accessString) as AccessDto;
      return new AccessModel(accessDto.accessToken, accessDto.refreshToken);
    } catch (e: any) {
      throw e;
    }
  }

  public toString(): string {
    const accessDto: AccessDto = {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
    };
    return JSON.stringify(accessDto);
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }
}
