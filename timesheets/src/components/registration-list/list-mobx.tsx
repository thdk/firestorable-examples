import * as React from 'react';

import { useStore } from '../../modules/root-store';
import { RegistrationList } from './list';
import { observer } from 'mobx-react-lite';
import { getRegistrations } from '../../modules/app/selectors';

const RegistrationListMobx = () => {
    const store = useStore();

    const registrations = getRegistrations(store);

    return registrations.length
    ? <RegistrationList
        registrations={registrations}
    />
    : <p>No registrations yet on this day.</p>;
};

export default observer(RegistrationListMobx);
