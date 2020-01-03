import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { getAuthenticatedUser } from '../../modules/app/selectors';
import { useStore } from '../../modules/root-store';


export interface IWithAuthenticationOptions {
    placeholder?: JSX.Element,
}

export const withAuthentication = (
    WrappedComponent: React.ComponentType,
    placeholder: JSX.Element = <></>,
) => {
    const WithAuthenticationComponent = () => {
        const store = useStore();
        const user = getAuthenticatedUser(store);

        // Wait for authentication check to happen
        if (user === undefined) {
            return <></>;
        }

        return user
            ? <WrappedComponent />
            : placeholder;
    };


    return observer(WithAuthenticationComponent);
};
