import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setIndicatorValue } from "../../redux/slices/indicatorSlice";
import { PersonView } from "./PersonView";

export const PersonPage: React.FC = () => {
  const dispatch = useDispatch();
  const indicatorValue = useSelector((state: RootState) => state.indicator.value);

  const handleChange = (value: string) => {
    dispatch(setIndicatorValue(value));
  };

  return (
    <PersonView
      indicatorValue={indicatorValue}
      setIndicatorValue={handleChange}
    />
  );
};
