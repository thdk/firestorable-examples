import React from "react";

import RegistrationForm from "../../components/registration-form";
import RegistrationList from "../../components/registration-list";
import { withAuthentication } from "../../hocs/with-authentication";
import SignInScreen from "../sign-in";
import Calendar from "../../components/calendar";

export const TimesheetScreen = () => {
    return <>
        <div className="panel-left">
            <h2>Select a day</h2>
            <Calendar></Calendar>
        </div>
        <div className="panel-right">
            <h2>Add new registration</h2>
            <RegistrationForm />
            <hr />
            <h2>Registrations</h2>
            <RegistrationList />
        </div>
    </>;
};

export default withAuthentication(TimesheetScreen, <SignInScreen/>);
