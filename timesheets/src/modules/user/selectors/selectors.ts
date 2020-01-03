import { UserStore } from "../store/user-store";

export const selectAuthenticatedUser = (store: UserStore) => {
    return store.firebaseUser;
};
