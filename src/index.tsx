import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';
import '../czl-lib/czl-utils.js';


const App: React.FC = function () {
  pdebug('render app');
  
  const handleClick = (e)=>{
    pdebug('父级 click 事件, e=', e);
  }
  return (
    <div onClick={handleClick}>
      <h1>hello world!</h1>
      <Input />
    </div>
  );
};

// render
ReactDOM.render(<App />, document.getElementById('root'));

export default App;


// // HMMR: 热更新
// if (module.hot) {
//   module.hot.accept();
// }
