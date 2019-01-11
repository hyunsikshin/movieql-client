import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';
import GlobalStyled from './globalStyled';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Route path={'/'} component={Home} exact={true} />
            <Route path={'/details/:movieId'} component={Detail} />
            <GlobalStyled />
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
