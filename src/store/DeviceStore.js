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
    ];
    this._devices = [
      { id: 1, name: 'iPhone 14 Pro', price: 600, rating: 8, img: '' },
      { id: 1, name: 'ProBook 450', price: 1500, rating: 6, img: '' },
      { id: 1, name: 'MacBook Air 2024', price: 2800, rating: 7, img: '' },
    ];
    this._selectedType = {};
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
}
