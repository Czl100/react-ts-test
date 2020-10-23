// import React, { Component, ReactNode, ComponentType, MouseEvent, FC } from 'react';
// const initialState = { show: false };
// const defaultProps = { props: {} as { [name: string]: any } };

// type State = Readonly<typeof initialState>;
// type Props = Partial<
//   {
//     children: RenderCallback | ReactNode;
//     render: RenderCallback;
//     component: ComponentType<ToggleableComponentProps<any>>;
//   } & DefaultProps
// >;
// type DefaultProps = typeof defaultProps;
// type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
// export type ToggleableComponentProps<P extends object = object> = {
//   show: State['show'];
//   toggle: Toggleable['toggle'];
// } & P;

// export class Toggleable extends Component<Props, State> {
//   static readonly defaultProps: Props = defaultProps;
//   readonly state: State = initialState;

//   render() {
//     const { component: InjectedComponent, props, render, children } = this.props;
//     const renderProps = {
//       show: this.state.show,
//       toggle: this.toggle,
//     };
//     if (InjectedComponent) {
//       return (
//         <InjectedComponent {...props} {...renderProps}>
//           {children}
//         </InjectedComponent>
//       );
//     }
//     if (render) {
//       return render(renderProps);
//     }
//     if (children instanceof Function) {
//       return children(renderProps);
//     }
//     return null;
//   }

//   private toggle = (event: MouseEvent<HTMLElement>) => this.setState(updateShowState);
// }
// const updateShowState = (prevState: State) => ({ show: !prevState.show });

// const H: JSX.Element = <h1>xxxx</h1>;

// // **************************************************

console.log(process.env.npm_package_name);