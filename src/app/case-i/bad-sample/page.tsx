"use client";

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

type Activity = {
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

export default function Page() {
  const [activity, setActivity] = useState<Activity | null>(null);

  const fetchRandomActivity = useCallback(async () => {
    const { data } = await axios.get<Activity>(
      "https://www.boredapi.com/api/activity"
    );
    setActivity(data);
  }, []);

  useEffect(() => {
    fetchRandomActivity();
  }, []);

  const isActivityFree = useMemo<boolean>(() => {
    if (!activity) return false;
    return activity.price === 0;
  }, [activity]);

  const isMultiParticipants = useMemo<boolean>(() => {
    if (!activity) return false;
    return activity.participants > 1;
  }, [activity]);

  const isSutiableForChildren = useMemo<boolean>(() => {
    if (!activity) return false;
    return (
      [
        "education",
        "recreational",
        "diy",
        "charity",
        "relaxation",
        "music",
      ].indexOf(activity.type) > -1
    );
  }, [activity]);

  return (
    <main>
      <div>
        <span>Activity name: {`${activity?.activity}`}</span>
      </div>
      <div>
        <span>Is activity free? {`${isActivityFree}`}</span>
      </div>
      <div>
        <span>Multiple participants? {`${isMultiParticipants}`}</span>
      </div>
      <div>
        <span>Suitable for children? {`${isSutiableForChildren}`}</span>
      </div>
    </main>
  );
}
