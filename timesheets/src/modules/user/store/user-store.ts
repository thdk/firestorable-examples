import {observable, computed, action } from "mobx";
import * as firebase from "firebase/app";

export class UserStore {
    private _firebaseUser = observable.box<undefined | firebase.User | null>(undefined);

    constructor() {
        firebase.auth().onAuthStateChanged(user => {
            this.setFirebaseUser(user);
        });
    }

    @computed
    public get firebaseUser() {
        return this._firebaseUser.get();
    }

    @action
    public setFirebaseUser(user: firebase.User | null) {
        this._firebaseUser.set(user);
    }
}
