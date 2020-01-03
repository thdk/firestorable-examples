import { useEffect } from "react";
import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";

import { IRegistration } from "../../modules/registration/types";
import { RegistrationForm } from "./registration-form";
import { useStore } from "../../modules/root-store";
import { getDate, getAuthenticatedUser, getActiveRegistration } from "../../modules/app/selectors";

const RegistrationFormMobx = () => {
    const store = useStore();
    const date = getDate(store);
    const userId = getAuthenticatedUser(store, true).uid;

    const activeRegistration = getActiveRegistration(store);

    useEffect(() => {
        activeRegistration && activeRegistration.watch();
        return () => activeRegistration && activeRegistration.unwatch();
    }, [activeRegistration]);

    const onSave = useCallback((data: Omit<IRegistration, "date" | "userId">) => {
            store.registrations.saveActiveRegistration({ ...data, date, userId });
    }, [
        activeRegistration,
        store.registrations,
        date,
        userId,
    ]);

    return <RegistrationForm
        registration={activeRegistration ? activeRegistration.data : undefined}
        onSave={onSave}
    ></RegistrationForm>
};

export default observer(RegistrationFormMobx);
