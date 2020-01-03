import React from "react";
import { useStore } from "../../modules/root-store";
import { getAuthenticatedUser } from "../../modules/app/selectors";

import * as firebase from "firebase/app";
import "firebase/auth";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";

export const Header = observer(() => {
    const store = useStore();

    const signout = useCallback(() => {
        firebase.auth().signOut();
    }, [])

    const user = getAuthenticatedUser(store);

        return user
        ? <>
            <p>Logged in as: {user.displayName}</p>
            <input type="button" value="Signout" onClick={signout} />
        </>
        : <></>;
});
