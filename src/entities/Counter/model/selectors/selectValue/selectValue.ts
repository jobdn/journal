import { createSelector } from "@reduxjs/toolkit";
import { selectCounter } from "../selectCouter/selectCounter";

export const selectValue = createSelector([selectCounter], (counter) => {
  return counter.value;
});
