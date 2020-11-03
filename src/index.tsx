import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';
import { ClsCmp } from './components/class-cmp';
import '../czl-lib/czl-utils.js';

const App: React.FC = function () {
  pdebug('render app');
  const [parentVal, setParentVal] = useState(0);

  return (
    <div id="root-app">
      <ClsCmp count={parentVal} />
    </div>
  );
};

// ********* render *****************************
const AppHoted = hot(App);
ReactDOM.render(<AppHoted />, document.getElementById('root'));

// // HMMR: 热更新
if (module.hot) {
  module.hot.accept('./components/class-cmp.tsx', function () {
    console.debug('Accepting the updated printMe module!');
  });
}
