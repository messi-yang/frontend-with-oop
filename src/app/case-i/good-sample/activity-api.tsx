import axios from "axios";
import { ActivityModel } from "./activity-model";

type ActivityDto = {
  activity: string;
  accessibility: number;
  type:
    | "education"
    | "recreational"
    | "social"
    | "diy"
    | "charity"
    | "cooking"
    | "relaxation"
    | "music"
    | "busywork";
  participants: number;
  price: number;
  key: string;
};

export class ActivityApi {
  static new(): ActivityApi {
    return new ActivityApi();
  }

  public async getRandomActivity(): Promise<ActivityModel> {
    const { data } = await axios.get<ActivityDto>(
      "https://www.boredapi.com/api/activity"
    );

    return ActivityModel.new(
      data.activity,
      data.accessibility,
      data.type,
      data.participants,
      data.price,
      data.key
    );
  }
}
