import React from 'react';

const Input: React.FC = function(){
  const handleChange = (e: React.ChangeEvent)=>{
    pdebug('handleCahnge, e=', e);
    test();
  }

  const handleClick = (e: React.MouseEvent)=>{
    pdebug('子组件 onClick 事件\ne=', e);
    e.stopPropagation();
  }
  return (
    <div><input onChange={handleChange} onClick={handleClick} type="text" placeholder="请输入..."/></div>
  )
}

export default Input;

function test(a:any[]= []){
  debugger
}