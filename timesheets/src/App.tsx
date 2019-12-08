import React from 'react';
import './App.css';
import { Collection } from 'firestorable';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

const timeRegistrations = new Collection(db, "registrations")

const RegistrationLine = () => {

};

const App: React.FC = () => {
  return (
    <div className="App">

    </div>
  );
}

export default App;
