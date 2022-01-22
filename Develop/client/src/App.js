import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//added this code
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
// } from '@apollo/client';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// const client = new ApolloClient({
//   url: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    //just added this apolloprovider line 18 and closing line 29 to the code
    // <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
