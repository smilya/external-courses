'use strict'

//Описание классов электроприборов
//Линт не пропускает статические поля, поэтому namesTaken вынесена в локальную переменную
let namesTaken = [];

class Device {
  constructor(name, power) {
    this.name = name;
    this._power = power; 
    this.isOn = false; 
  }

  get power() {
    return this._power; 
  }
  switch() {
    this.isOn = !this.isOn;
    if(this.isOn) {
      console.log(`${this.name} is ON`);
    }
    else {
      console.log(`${this.name} is OFF`);
    }
    return this.isOn;
  }
  getStatus() {
    return `The device: ${this.name}, power: ${this._power}W, ` +
    `is ${this.isOn ? 'ON' : 'OFF'} now`;
  }

  static createDevice(name) {
    if (namesTaken.includes(name)) {
      console.log(`A device name ${name} is occupied. Choose another one.`);
    }
    namesTaken.push(name);
    return new this(...arguments);
  }
}

class WaterHeater extends Device {
  constructor(name, power, waterCapacity) {
    super(name, power)
    this._waterCapacity = waterCapacity;
    this.waterAmount = 0;
  }

  getStatus() {
    return super.getStatus() + `, water loaded: ${this.waterAmount}L`;
  }
  get waterCapacity() {
    return this._waterCapacity;
  }
  addWater(amount) {
    this.waterAmount += amount;
    if (this.waterAmount > this._waterCapacity) {
      this.waterAmount = this._waterCapacity;
    }
    return;
  }
}

class Lighter extends Device {
  constructor(name, power, brightness) {
    super(name, power)
    this._brightness = brightness;
  }

  getStatus() {
    return super.getStatus() + `, brightness ${this.brightness}lm`
  }
  get brightness() {
    return this._brightness;
  }  
}

class TimerLighter extends Lighter {
  setTimer(minutes=1) {
    clearTimeout(this._timer);
    if(!this.isOn) {
      this.switch();
      console.log(`${this.name}: the light is switched on for ${minutes} minute(s) by timer`);
    }
    this._timer = setTimeout(() => {
        this.switch();
        console.log(`${this.name}: the light is switched off by timer`);
    }, minutes*60000);
    return;
  }
  switch() {
    super.switch();
    clearTimeout(this._timer);
  }
}

//Описание класса для создания комнаты
class Room {
  constructor(devices) {
    this.devices = devices;
  }

  findDevice(name) {
    for (let device of devices) {
      if(device.name === name) {
        return device;
      }      
    }
    return null;
  }

  turnDevicesOn(...names) {
    for (let name of names) {
      let device = this.findDevice(name);
      if (device && !device.isOn) {
        device.switch();
      }
    }
    return;
  }

  turnDevicesOff(...names) {
    for (let name of names) {
      let device = this.findDevice(name);
      if (device && device.isOn) {
        device.switch();
      }
    }
    return;
  }

  getConsumingPower() {
    let totalPower = 0;
    for (let device of devices) {
      if (device.isOn) {
        totalPower += device.power;
      }
    }
    return totalPower;
  }
}

// Создаем электроприборы
let devices = [
  Device.createDevice('iron', 1500),
  WaterHeater.createDevice('boiler', 1000, 50),
  WaterHeater.createDevice('kettle', 2000, 1.5),
  Lighter.createDevice('lamp', 60, 700),
  TimerLighter.createDevice('spotlight', 120, 1200)
];

// Создаем комнату и заполняем ее приборами
let room = new Room(devices);

// Включаем в розетку лампу, бойлер и утюг
room.turnDevicesOn('lamp', 'boiler', 'iron');

// Считаем суммарную потребляемую мощность
let totalPower = room.getConsumingPower(); // 2560

// Находим прибор spotlight и активируем его таймер на 0.5 минуты
room.findDevice('spotlight').setTimer(0.5);