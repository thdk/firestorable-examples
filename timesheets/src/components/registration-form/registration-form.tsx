import * as React from 'react';
import { useCallback, useState } from 'react';

import { IRegistration } from "../../modules/registration/types";

import './style.css';

export type RegistrationFormProps = {
    registration?: IRegistration;
    onSave: (data: Omit<IRegistration, "date" | "userId">) => void;
}

export const RegistrationForm = (props: RegistrationFormProps) => {
    const {
        onSave,
        registration: {
            description,
            time,
        } = {
            description: "",
            time: "",
        }
    } = props;

    const [registrationTime, setRegistrationTime] = useState(time);
    const [registrationDescription, setRegistrationDescription] = useState(description);

    React.useEffect(() => {
        setRegistrationDescription(description);
        setRegistrationTime(time);
    }, [description, time]);

    const onChangeTime = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "")
            setRegistrationTime("");
        else
            setRegistrationTime(+e.target.value);
    }, [setRegistrationTime]);

    const onChangeDescription = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistrationDescription(e.target.value);
    }, [setRegistrationDescription]);

    const onSaveForm = useCallback((_e: React.MouseEvent<HTMLInputElement>) => {
        let time: number | undefined = 0;

        if (typeof registrationTime === "number") {
            time = registrationTime;
        }

        setRegistrationDescription("");
        setRegistrationTime("");

        onSave({
            time,
            description: registrationDescription,
        });

    }, [onSave, registrationTime, registrationDescription]);

    return <>
        <div className="registration-form">
            <div className="registration-form-inputs">
                <div className="registration-form-time registration-form-input-wrapper">
                    <label>Time:</label>
                    <input autoFocus type="number" value={registrationTime} onChange={onChangeTime} />
                </div>
                <div className="registration-form-description registration-form-input-wrapper">
                    <label>Description:</label>
                    <input type="text" value={registrationDescription} onChange={onChangeDescription} />
                </div>
            </div>
            <div className="registration-form-actions">
                <input type="button" value="Save" onClick={onSaveForm}></input>
            </div>
        </div>
    </>;
};
