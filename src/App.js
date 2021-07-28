import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Page404 from './pages/Page404';

const routes = [
  { path: "/", component: <Home />, exact: true },
  { path: "/about", component: <About />, },
  { path: "/dashboard", component: <Dashboard />, },
  { component: <Page404 />, },
]

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      {/* Switchni qo'yyapmiz */}
      <Switch>
        {/* 1-variant */}
        {
          routes.map((value, index) =>
            <Route exact={value.exact} path={value.path} key={value.path}>
              {value.component}
            </Route>)
        }

        {/* 2-variant
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route>
          <Page404 />
        </Route> */}
      </Switch>

    </div >
  );
}

export default App;
