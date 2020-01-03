import * as React from 'react';

import { IRegistration } from "../../modules/registration/types";

import './style.css';

type RegistrationLineProps = React.HTMLProps<HTMLDivElement>
    & {
        registration?: IRegistration;
        onSelect: () => void;
        onDelete: () => void;
    };

export const RegistrationLine = (props: RegistrationLineProps) => {
    if (!props.registration) {
        return null;
    }

    const { registration,
        onSelect,
        onDelete,
        ...restProps
    } = props;

    const { time, description, date } = registration;

    console.log({date});
    return <>
        <div className="registration-line" {...restProps}>
            <div className="registration-line-details">
                <div className="registration-line-time">
                    {(time === undefined ? '' : time.toFixed(2))}h
            </div>
                <div className="registration-line-description">
                    {description}
                </div>
            </div>
            <div className="registration-line-tools">
                <div className="registration-line-edit">
                    <input
                        type="button"
                        value="edit"
                        onClick={onSelect}
                    />
                </div>
                <div className="registration-line-delete">
                    <input
                        type="button"
                        value="delete"
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    </>;
};
