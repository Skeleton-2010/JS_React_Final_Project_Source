import { createSelector } from "@reduxjs/toolkit";

const selectContacts = (state) => state.contacts;

export const selectAll = createSelector(
  [selectContacts],
  (contacts) => {
    return contacts;
  }
);
