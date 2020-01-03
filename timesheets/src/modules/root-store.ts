import React from "react";
import { RegistrationStore } from "./registration/store";
import { ViewStore } from "./view/store";
import { UserStore } from "./user/store/user-store";

class RootStore {
    public readonly registrations: RegistrationStore;
    public readonly view: ViewStore;
    public readonly user: UserStore;

    constructor() {
        this.view = new ViewStore();
        this.user = new UserStore();
        this.registrations = new RegistrationStore(this);
    }
}


const createStore = () => {
    const store = new RootStore();

    // for development purposes only
    (window as any)["store"] = store;

    return store;
};

export type Store = ReturnType<typeof createStore>;

export const StoreContext = React.createContext(createStore());

export const useStore = () => {
    const store = React.useContext(StoreContext)
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.')
    }
    return store
}
