import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ];
        this._devices = [
            {id: 1, name: 'S3', price: 50000, rating: 4, img: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/Samsung_SGS3_Startseite.jpg'},
            {id: 2, name: 'Iphone 13 Max Pro', price: 100000, rating: 5, img: 'https://kattabozor.s3.eu-central-1.amazonaws.com/ri/a11fed67b9f31ab4ff3f0482549ec5cb75c140ed7b0419f6c8a15fd80010b22c_b3kMvI_640l.jpg'},
            {id: 3, name: 'FR-3000', price: 80000, rating: 3, img: 'https://www.creditasia.uz/upload/iblock/536/kholodilnik-samsung-rt62k7110sl-wt.jpg'},
        ];
        this._selectedType = {};
        this._selectedBrand = {};
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
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}