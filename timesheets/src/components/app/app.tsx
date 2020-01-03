import React from 'react';
import { observer } from 'mobx-react-lite';

import './app.css';
import TimesheetScreen from '../../screens/timesheet/timesheet-screen';
import { Header } from '../header/header';

export const App = observer(() => {
  return (
    <div className="App">
      <h1>Timesheet</h1>
      <Header></Header>
      <hr />
      <div className="container">
        <TimesheetScreen/>
      </div>
    </div>
  );
});
