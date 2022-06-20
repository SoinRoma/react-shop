import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = [];
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(count) {
        this._totalCount = count;
    }


    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        this.setPage(1);
        return this._selectedType;
    }

    get selectedBrand() {
        this.setPage(1);
        return this._selectedBrand;
    }

    get page() {
        return this._page;
    }

    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
}