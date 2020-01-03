import { Store } from "../../root-store";
import { selectRegistrations, selectActiveRegistration } from "../../registration/selectors";

export function getRegistrations(store: Store) {
    return selectRegistrations(store.registrations);
}

export function getActiveRegistration(store: Store) {
    return selectActiveRegistration(store.registrations);
}
