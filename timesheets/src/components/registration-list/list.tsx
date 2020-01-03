import * as React from 'react';

import { IRegistration } from "../../modules/registration/types";

import RegistrationLine from '../registration-line';
import { Doc } from 'firestorable';

export type RegistrationListProps = {
    registrations: Doc<IRegistration>[];
}

export const RegistrationList = (props: RegistrationListProps) => {
    const {registrations} = props;
    return <div className="registrations-list">
        {registrations
          .map(doc => <RegistrationLine
            key={doc.id}
            registration={doc}
          />)
        }
      </div>;
};
