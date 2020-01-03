import { IRegistration, IRegistrationData } from "../types";

export const deserialiseRegistration = (doc: IRegistrationData): IRegistration => {
    const {date, userId, ...rest} = doc;

    return {...rest, date: doc.date ? doc.date.toDate() : undefined, userId: userId || "unknown" };
}
