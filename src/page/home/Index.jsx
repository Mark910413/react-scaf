import React from 'react';
import { render } from 'react-dom';
import Store from '@store/index';
import Car from './Test.tsx';
import './style.less';


class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => {}
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="img-list">
        <span>{Store.getState()}</span>
        <div>
          <button onClick={() => Store.dispatch({type: 'INCREMENT'})}>INCREMENT</button>
          <button onClick={() => Store.dispatch({type: 'DECREMENT'})}>DECREMTNT</button>
        </div>
        <Car />
      </div>
    );
  }
}

export default Widget;