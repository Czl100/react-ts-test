window.addEventListener('error', (e) => {
  pdebug('window.onerror=> ', e);
});

const throwError = () => {
  setTimeout(() => {
    throw new Error('test error!');
  }, 1000);
};

export function main() {
  // try {
  //   throwError();
  // } catch (e) {
  //   pdebug('catch error=>', e);
  // }

  Promise.resolve()
    .then(() => throwError())
    .catch((e) => pdebug('promise.catch error!'));
}
// main();

// ********* TS类型 ******************************************************
let x: string = 1 as any;

interface ParentA {
  age: number;
}
interface ParentB {
  name: string;
}
type Person = ParentA & ParentB;
let my: ParentA = {
  age: 1,
};
my = {
  age: 1,
};

interface Pointer {
  w: number;
  h: number;
}

function cacul(p: Pointer): number {
  return p.h + p.w;
}

let p1 = {
  w: 1,
  h: 1,
  x: 1,
  y: '23',
};

let p2 = {
  w: 1,
  x: 1,
};

// cacul(p2);
