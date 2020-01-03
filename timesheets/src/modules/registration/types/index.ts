export interface IRegistration {
    time: number;
    description: string;
    date?: Date;
    userId: string;
}

export interface IRegistrationData {
    time: number;
    description: string;
    date?: firebase.firestore.Timestamp;
    userId?: string;
}
