export function createPrint(level) {
  return function (...args) {
    const length = args.length;
    if (length === 0) {
      return console[level]('\n---------------------------------------------------');
    }

    const hasConfigColor = /^color\:/.test(args[length - 1]);
    const color = hasConfigColor ? args.pop() : 'color: #FFF';
    if (typeof args[0] !== 'object' || args[0] === null) {
      args[0] = `%c${args[0]}`;
      args.splice(1, 0, color);
      console[level](...args);
    } else {
      args.forEach((obj) => {
        const keys = Object.keys(obj);
        keys.forEach((k) => {
          console[level](`${k}: %o`, obj[k]);
        });
      });
    }
  };
}

const prints = ['debug', 'log', 'warn', 'error'];
prints.forEach((level) => {
  window[`p${level}`] = createPrint(level);
});
