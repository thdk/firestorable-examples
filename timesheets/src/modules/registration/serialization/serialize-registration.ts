import { IRegistration, IRegistrationData } from "../types";
import * as firebase from 'firebase/app';

export const serialiseRegistration = (doc: Partial<IRegistration> | null): Partial<IRegistrationData> => {
    if (doc === null)
        throw new Error("Saving null as data for registration not supported.");

    const { date, ...rest } = doc;

    return { ...rest, date: doc.date ? firebase.firestore.Timestamp.fromDate(doc.date) : undefined };
}
