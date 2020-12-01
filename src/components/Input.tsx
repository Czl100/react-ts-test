import React, { useEffect } from 'react';

const Input = function (props) {
  pdebug('\n渲染Input组件');
  const { onChange } = props;

  useEffect(() => {
    pdebug('Input组件=>useEffect!');
    return () => pdebug('Input组件=>useEffect clean!');
  });

  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div>
      <input onChange={handleChange} onClick={handleClick} type="text" placeholder="请输入..." />
    </div>
  );
};

export default Input;
