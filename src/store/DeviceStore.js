import { makeAutoObservable } from 'mobx';

export class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Smartfones' },
      { id: 2, name: 'Laptops' },
      { id: 3, name: 'Refrigirators' },
      { id: 4, name: 'Displays' },
    ];
    this._brands = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Samsung' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'HP' },
    ];
    this._devices = [
      { id: 1, name: 'iPhone 14 Pro', price: 600, rating: 8, img: '' },
      { id: 2, name: 'ProBook 450', price: 1500, rating: 6, img: '' },
      { id: 3, name: 'MacBook Air 2024', price: 2800, rating: 7, img: '' },
      {
        id: 4,
        name: 'RS68A8540B1 EF',
        price: 1400,
        rating: 7,
        img: '',
      },
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
