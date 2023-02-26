import { createSelector } from "@reduxjs/toolkit";
import { selectCounter } from "../selectCouter/selectCounter";

export const selectValue = createSelector([selectCounter], (counter) => {
  console.log("DO SELECTORS WORK CORRECTLY?????: ", counter);

  return counter.value;
});
