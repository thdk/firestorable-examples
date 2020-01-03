import * as React from 'react';

import { IRegistration } from "../../modules/registration/types";

import './style.css';
import { Doc } from 'firestorable';
import { RegistrationLine } from './registration-line';
import { useStore } from '../../modules/root-store';

type RegistrationLineProps = React.HTMLProps<HTMLDivElement>
    & {
        registration?: Doc<IRegistration>;
    };

const RegistrationLineMobx = (props: RegistrationLineProps) => {
    const store = useStore();

    const { registration } = props;

    if (!registration) {
        return null;
    };

    return <RegistrationLine
        registration={registration.data}
        onSelect={() => store.registrations.setActiveRegistration(registration)}
        onDelete={() => store.registrations.registrationsCollection.deleteAsync(registration.id)}
    />;
};

export default RegistrationLineMobx;
