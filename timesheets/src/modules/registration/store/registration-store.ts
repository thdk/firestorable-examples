import firebase from 'firebase/app';
import { Collection, Doc } from 'firestorable';
import { IRegistration, IRegistrationData } from '../types';
import { observable, action, computed, reaction, transaction } from 'mobx';
import { Store } from '../../root-store';
import { getDate, getAuthenticatedUser } from '../../app/selectors';
import { serialiseRegistration } from '../serialization/serialize-registration';
import { deserialiseRegistration } from '../serialization/deserialize-registration';
import { CollectionReference } from '@firebase/firestore-types';

export class RegistrationStore {
    public readonly registrationsCollection: Collection<IRegistration, IRegistrationData>;

    private activeRegistrationField = observable.box<Doc<IRegistration, IRegistrationData> | undefined>(undefined)

    constructor(rootStore: Store) {

        const createQuery = () => {
            const user = getAuthenticatedUser(rootStore);
            const date = getDate(rootStore);
            return user
                ? (ref: CollectionReference) => ref
                    .where("date", "==", date)
                    .where("userId", "==", user.uid)
                : null;
        }

        this.registrationsCollection = new Collection(
            firebase.firestore(),
            "registrations",
            {
                query: createQuery(),
                deserialize: deserialiseRegistration,
                serialize: serialiseRegistration,
            },
            {
                logger: message => console.log(message),
            },
        );

        reaction(() => getDate(rootStore), () => {
            transaction(() => {
                this.registrationsCollection.query = createQuery();
                this.setActiveRegistration(undefined);
            })
        });

        reaction(() => getAuthenticatedUser(rootStore), () => {
            this.registrationsCollection.query = createQuery();
        });
    }

    @computed
    public get activeRegistration() {
        return this.activeRegistrationField.get();
    }

    @computed
    public get docs() {
        return this.registrationsCollection.docs;
    }

    @action
    public setActiveRegistration(value: Doc<IRegistration> | undefined) {
        this.activeRegistrationField.set(value);
    }

    public saveActiveRegistration(data: IRegistration) {
        if (this.activeRegistration) {
            this.registrationsCollection.updateAsync(data, this.activeRegistration.id)
                .then(() => this.setActiveRegistration(undefined));
        }
        else {
            this.registrationsCollection.addAsync(data);
        }
    }
}