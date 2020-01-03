import React from 'react';
import Calendar from 'react-calendar';
import { useStore } from '../../modules/root-store';
import { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

const CalendarMobx = () => {

    const store = useStore();

    const onChange = useCallback((date: Date | Date[]) => {
        if (date instanceof Array) {
            throw new Error("Date range is not supported");
        }

        store.view.setDate(date);
    }, [store.view]);

    return <Calendar
        onChange={onChange}
        value={store.view.date}
    />
}

export default observer(CalendarMobx);
