import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/App.scss';

import createBusiness from './redux/lib/store';
import Dashboard from './component/dashboard/index';

const store = createBusiness();

class App extends Component {
  componentDidMount() {
    store.subscribe(()=> {
      console.log('sub says',store.getState());
    });
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Game Business Inventory</h1>
              <nav>
                <ul>
                  <li><Link to="/" className="Link">Dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <main>
              <Route exact path="/" component={Dashboard}/>
            </main>
            <footer>
              &copy; John Miester 2018
            </footer>
          </div>
        </BrowserRouter>  
      </Provider>
    );
  }
}

export default App;