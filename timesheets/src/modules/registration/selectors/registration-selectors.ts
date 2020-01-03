import { RegistrationStore } from "../store";

export function selectRegistrations(store: RegistrationStore) {
    return store.docs;
}

export function selectActiveRegistration(store: RegistrationStore) {
    return store.activeRegistration;
}
