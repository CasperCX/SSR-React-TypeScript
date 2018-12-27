import * as React from 'react';

interface IProps {
    text: string;
    age: number;
}

interface IState {
    email: string;
    name: string;
}

export default class Form extends React.Component<IProps, IState> {
    state: IState = {
        name: '',
        email: ''
    }

  public render() {
    const {text} = this.props;
    return (
        <div>{text}</div>
    )
  }
}


