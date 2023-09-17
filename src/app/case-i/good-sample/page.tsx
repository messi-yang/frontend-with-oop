"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ActivityApi } from "./activity-api";
import { ActivityModel } from "./activity-model";

export default function RandomActivityPage() {
  const activityApi = useMemo(() => ActivityApi.new(), []);
  const [activity, setActivity] = useState<ActivityModel | null>(null);

  const fetchRandomActivity = useCallback(async () => {
    const randomActivity = await activityApi.getRandomActivity();
    setActivity(randomActivity);
  }, [activityApi]);

  useEffect(() => {
    fetchRandomActivity();
  }, [fetchRandomActivity]);

  return (
    <main>
      {activity ? (
        <>
          <div>
            <span>Activity name: {`${activity.getName()}`}</span>
          </div>
          <div>
            <span>Is activity free? {`${activity.isFree()}`}</span>
          </div>
          <div>
            <span>
              Multiple participants? {`${activity.isMultiParticipants()}`}
            </span>
          </div>
          <div>
            <span>
              Suitable for children? {`${activity.isSuitableForChildren()}`}
            </span>
          </div>
        </>
      ) : null}
    </main>
  );
}
