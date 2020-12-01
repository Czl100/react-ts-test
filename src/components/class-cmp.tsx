import React, { Component } from 'react';
import Input from './Input';

const defaultProps = {
  name: 'czl',
};
type IProps = {
  age?: number;
  count?: number;
  [k: string]: any;
} & Partial<typeof defaultProps>;

export class ClsCmp extends React.PureComponent<IProps, any> {
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: '',
      a: 0,
    };
  }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   pdebug('\ngetDerivedStateFromProps', 'color:red');
  //   pdebug('nextProps: %o\nnextState: %o', nextProps, nextState);
  //   return null;
  // }

  handleChangeText = (text) => {
    this.setState({
      text,
    });
  };

  handleClick = () => {
    // pdebug('\n父组件修改, state: ', this.state, 'color:bule');
    // this.setState({
    //   a: '父组件修改',
    // });
  };

  handleChangeState = (newState) => {
    setTimeout(() => {
      this.setState({
        a: '子1',
      });
      pdebug('定时器中, state: ', this.state);

      this.setState({
        a: '子2',
      });
      pdebug('定时器中, state: ', this.state);
    });
  };

  render() {
    pdebug('\nrender ClsCmp', 'color:yellow');
    return (
      <div className="ClsCmp" onClick={this.handleClick}>
        <p>我是ClsCmp组件: {this.state.count}</p>
        <button onClick={this.handleClick}>点击修改state</button>
        <Child handleChangeStateA={this.handleChangeState} />
      </div>
    );
  }
}

class Child extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      b: false,
    };
  }

  handleChangeState = () => {
    this.props.handleChangeStateA({ a: '子组件修改' });
  };

  render() {
    return <button onClick={this.handleChangeState}>点我改变父组件的StateA</button>;
  }
}
