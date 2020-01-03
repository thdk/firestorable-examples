import { ViewStore } from "../store"

export const selectDate = (store: ViewStore) => {
    return store.date;
};
