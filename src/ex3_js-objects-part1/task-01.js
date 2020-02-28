'use strict';

const dog = {};
dog.name = "Bobik";
dog.gender = "male";
dog.age = 9;
dog.isFighterBreed = false;
delete dog.gender;

/* Из задания не вполне понятно, cледует ли этот код обернуть в функцию.
Если да, то решение ниже: */

function manipulateInnerObject(name="Bobik", gender="male", age=9, isFighterBreed=false, toBeDeleted=null) {
  let obj = {};
  obj.name = name;
  obj.gender = gender;
  obj.age = age;
  obj.isFighterBreed = isFighterBreed;
  delete obj[toBeDeleted];
  return obj;
} 