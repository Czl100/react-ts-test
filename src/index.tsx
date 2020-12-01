import { hot } from 'react-hot-loader/root';
import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';
import { ClsCmp } from './components/class-cmp';
import './index.css';
import '../czl-lib/czl-utils.js';

const App: React.FC = function () {
  pdebug('\nrender app');
  const [parentVal, setParentVal] = useState(0);

  const handleSetVal = React.useCallback(() => setParentVal(parentVal + 1), []);

  const inputCmp = useMemo(() => <Input />, []);

  return (
    <div id="root-app">
      {/* <input type="text" placeholder="请输入..."/> */}
      <div className="input" contentEditable placeholder="请输入..."></div>
      {/* <p>parentVal: {parentVal}</p> */}
      {/* {inputCmp} */}
      {/* <button onClick={() => setParentVal(parentVal + 1)}>parentVal++</button> */}
      {/* <ClsCmp onChange={handleSetVal} /> */}
    </div>
  );
};

// ********* render *****************************
const AppHoted = hot(App);
ReactDOM.render(<App />, document.getElementById('root'));

// ********* HMMR: 热更新 ************************
if (module.hot) {
  module.hot.accept('./components/class-cmp.tsx', function () {
    console.debug('Accepting the updated printMe module!');
  });
}

// ********* 工具函数 *****************************
export function deepClone(srcData, hash = new WeakMap()) {
  // 基本数据类型 | 函数
  if (srcData === null || typeof srcData !== 'object') {
    return srcData;
  }
  if (srcData instanceof Date) return new Date(srcData);
  if (srcData instanceof RegExp) return new RegExp(srcData);

  if (hash.get(srcData)) {
    return hash.get(srcData);
  }

  // 引用类型: 包括数组
  let newData = new srcData.constructor();
  hash.set(srcData, newData);

  let keys = [...Object.keys(srcData), ...Object.getOwnPropertySymbols(srcData)];
  keys.forEach((k) => {
    newData[k] = deepClone(srcData[k], hash);
  });
  return newData;
}