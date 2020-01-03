import { observable, computed, action } from "mobx";

export class ViewStore {

    @observable
    private _date: Date;
    constructor() {
        const today = new Date();

        this._date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    }

    @computed
    public get date() {
        return this._date;
    }

    @action
    public setDate(value: Date) {
        this._date = value;
    }
}