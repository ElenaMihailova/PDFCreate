import { PersonView } from "./PersonView";
import { useState } from "react";

export const PersonPage = () => {
  const [indicatorValue, setIndicatorValue] = useState<string>("1");

  return (
    <PersonView
      indicatorValue={indicatorValue}
      setIndicatorValue={setIndicatorValue}
    />
  );
};
