import React from 'react';
import Rx from 'rxjs/Rx';
import { subscribe } from './helpers';
import Page from './Page';

const { instanceOf } = React.PropTypes;
const { Observable } = Rx;

export default class App extends React.Component {
  static propTypes = {
    header: instanceOf(Observable).isRequired,
    body: instanceOf(Observable).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { header: '' };
  }

  componentDidMount() {
    this.subscription = subscribe(this, {
      header: this.props.header,
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    console.log('render App');
    return (
      <div>
        <h1>{this.state.header}</h1>
        <Page body={this.props.body} />
      </div>
    );
  }
}
