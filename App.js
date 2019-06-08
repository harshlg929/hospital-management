import React from 'react';
import Routes from './src/components/Routes';

export default class App extends React.Component {
  static navigationOptions = {
    header: null
}
  render() {
    return <Routes />;
  }
}