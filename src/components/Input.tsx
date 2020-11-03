import React from 'react';

const Input = function (props) {
  pdebug('渲染Input组件');
  const { onChange } = props;
  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  };

  const handleClick = (e: React.MouseEvent) => {
    // pdebug('子组件 onClick 事件\ne=', e);
    e.stopPropagation();
  };

  return (
    <div>
      <input onChange={handleChange} onClick={handleClick} type="text" placeholder="请输入..." />
    </div>
  );
};

export default Input;
