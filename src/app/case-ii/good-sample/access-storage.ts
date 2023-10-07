import { AccessModel } from "./access-model";

export class AccessStorage {
  constructor() {}

  static new() {
    return new AccessStorage();
  }

  public save(access: AccessModel) {
    localStorage.setItem("access", access.toString());
  }

  public load(): AccessModel | null {
    try {
      const accessString = localStorage.getItem("access");
      if (!accessString) return null;

      return AccessModel.parse(accessString);
    } catch (e: any) {
      return null;
    }
  }
}
