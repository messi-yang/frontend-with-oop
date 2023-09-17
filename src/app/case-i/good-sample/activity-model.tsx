type ActivityType =
  | "education"
  | "recreational"
  | "social"
  | "diy"
  | "charity"
  | "cooking"
  | "relaxation"
  | "music"
  | "busywork";

export class ActivityModel {
  constructor(
    private name: string,
    private accessibility: number,
    private type: ActivityType,
    private participantCount: number,
    private price: number,
    private key: string
  ) {}

  static new(
    name: string,
    accessibility: number,
    type: ActivityType,
    participantCount: number,
    price: number,
    key: string
  ): ActivityModel {
    return new ActivityModel(
      name,
      accessibility,
      type,
      participantCount,
      price,
      key
    );
  }

  public getName(): string {
    return this.name;
  }

  public isFree(): boolean {
    return this.price === 0;
  }

  public isMultiParticipants(): boolean {
    return this.participantCount > 0;
  }

  public isSuitableForChildren(): boolean {
    return (
      [
        "education",
        "recreational",
        "diy",
        "charity",
        "relaxation",
        "music",
      ].indexOf(this.type) > -1
    );
  }
}
