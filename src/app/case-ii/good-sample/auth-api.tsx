import axios from "axios";
import { AccessModel } from "./access-model";

type AccessDto = {
  access_token: string;
  refresh_token: string;
};

export class AuthApi {
  static new() {
    return new AuthApi();
  }

  public async sendLoginRequest(
    emailAddress: string,
    password: string
  ): Promise<AccessModel> {
    const { data } = await axios.post<AccessDto>(
      "https://fake.auth.api/login",
      {
        email_address: emailAddress,
        password,
      }
    );
    return AccessModel.new(data.access_token, data.refresh_token);
  }
}
