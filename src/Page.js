import React from 'react';
import Rx from 'rxjs/Rx';
import { subscribe } from './helpers';

const { instanceOf } = React.PropTypes;
const { Observable } = Rx;

export default class Page extends React.Component {
  static propTypes = {
    body: instanceOf(Observable).isRequired,
  };

  constructor(props) {
    console.log('new Page');
    super(props);
    this.state = { body: '' };
    this.subscription = subscribe(this, {
      body: props.body,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.body !== this.props.body ||
      nextState.body !== this.state.body
    );
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    console.log('render Page');
    return (
      <div>
        {this.state.body}
      </div>
    );
  }
}
