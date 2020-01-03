import { selectDate } from "../../view/selectors";
import { Store } from "../../root-store";

export const getDate = (store: Store) => {
    return selectDate(store.view);
};
