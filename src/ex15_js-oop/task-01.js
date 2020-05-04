'use strict'

//Определяем иерархию сладостей
function Sweet() {}
Sweet.prototype.getNetWeight = function() {
  return this.netWeight;
}
Sweet.prototype.getGrossWeight = function() {
  return this.netWeight + this.packWeight;
}
Sweet.prototype.getName = function() {
  return this.name;
}
Sweet.prototype.getFlavour = function() {
  return this.flavour;
}

function Chocolate(netWeight, packWeight, choco_type) {
  this.netWeight = netWeight;
  this.packWeight = packWeight;
  this.flavour = 'chocolate';
  this.choco_type = choco_type;
}
Chocolate.prototype = new Sweet();
Chocolate.prototype.getChocoType = function() {
  return this.choco_type;
}

function Choco_bar(choco_type) {
  Chocolate.call(this, 100, 10, choco_type);
  this.name = `${this.choco_type}-choco-bar`;
}
Choco_bar.prototype = Chocolate.prototype;

function Choco_candy(choco_type) {
  Chocolate.call(this, 20, 5, choco_type);
  this.name = `${this.choco_type}-choco-candy`;
}
Choco_candy.prototype = Chocolate.prototype;

function Candy(netWeight, packWeight, flavour, color) {
  this.netWeight = netWeight;
  this.packWeight = packWeight;
  this.flavour = flavour;
  this.color = color;
}
Candy.prototype = new Sweet();
Candy.prototype.getColor = function() {
  return this.color;
}

function Lollipop(flavour, color) {
  Candy.call(this, 15, 5, flavour, color);
  this.name = `${this.color}-${this.flavour}-lollipop`;
}
Lollipop.prototype = Candy.prototype;

function Drop(flavour, color) {
  Candy.call(this, 10, 0, flavour, color);
  this.name = `${this.color}-${this.flavour}-drop`;
}
Drop.prototype = Candy.prototype;

//Создаем объект для подарка
let present = {
  composition: [],

  addSweet: function () {
    for (let sweet of arguments) {
      this.composition.push(sweet);
    }
    return this.composition;   
  },

  getTotalWeight: function(isNet) {
    let weightFunction = isNet ? 'getNetWeight' : 'getGrossWeight';
    let totalWeight = 0;
    for (let item of this.composition) {
      totalWeight += item[weightFunction]();
    }
    return totalWeight;
  },

  sortSweets: function(property) {
    if (typeof this.composition[0][property] === 'number') {
      this.composition.sort((a, b) => a[property] - b[property])
    }
    else {
      this.composition.sort((a, b) => a[property] > b[property] ? 1 : -1);
    }
    return this.composition;
  },

  findSweet: function(name) {
    for (let sweet of this.composition) {
      if (sweet.name === name) {
        return sweet;
      }      
    }
    return null;
  }
};

//Создаем и добавляем в подарок сладости
present.addSweet(
  new Choco_bar('bitter'), 
  new Choco_candy('milk'), 
  new Choco_candy('white'),
  new Lollipop('lemon', 'yellow'),
  new Drop('mint', 'green'),
  new Drop('strawberry', 'red')
)

//Определяем вес подарка (брутто)
let grossWeight = present.getTotalWeight(); //200

//Сортируем сладости по весу упаковки в порядке возрастания 
let sortedByPackWeight = present.sortSweets('packWeight'); //[Drop, Drop, Choco_candy, Choco_candy, Lollipop, Choco_bar]

//Находим в подарке красный клубничный леденец
let redStrawberryDrop = present.findSweet('red-strawberry-drop'); //Drop {netWeight: 10, packWeight: 0, flavour: "strawberry", color: "red", name: "red-strawberry-drop"}