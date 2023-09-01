// const inputs = document.querySelectorAll('input');

const obj = { width: 10, height: 15 };
const area = obj.width * obj.height;

const fnt = (left: number, right: number) => {
  return left * right;
};

console.log(fnt(10, 20));

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Frederick",
  id: 0,
};

console.log({ ...user });

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user1: User = new UserAccount("Murphy", 1);

function deleteUser(user: User) {
  console.log(user);
}

deleteUser({ name: "Fred", id: 0 });

function getAdminUser(): User {
  return { name: "Fredooo", id: 0 };
}

console.log(getAdminUser());

type WindowStates = "open" | "closed" | "minimized";

function windowState(state: WindowStates): WindowStates {
  return state;
}

console.log(windowState("minimized"));

function getLength(obj: string | string[]) {
  if (Array.isArray(obj)) {
    const vals = {};
    obj.forEach((val) => {
      vals[val] = val;
    });
    return vals;
  }
  return obj;
}

console.log(getLength(["0", "1", "2"]));

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

// const object = backpack.get();
// console.log(object)

// console.log(backpack.add('23'));

// Structural Type System
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point);
const point1 = { x: 10, y: 34, z: 0 };
logPoint(point1);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint);
// console.log(inputs);
