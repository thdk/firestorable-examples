import { selectAuthenticatedUser } from "../../user/selectors";
import { Store } from "../../root-store";

export function getAuthenticatedUser(store: Store, required: true): firebase.User;
export function getAuthenticatedUser(store: Store): firebase.User | null | undefined;
export function getAuthenticatedUser(store: Store, required?: true): firebase.User | null | undefined {
    const user = selectAuthenticatedUser(store.user);

    if (!user && required) {
        throw new Error("Authenticated user is required");
    }

    return user;
}
