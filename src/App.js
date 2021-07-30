import { Route, Switch } from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import Home from "./pages/Home";
import Mobileapps from './pages/Mobileapps';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mobileapps" component={Mobileapps} />
        <Route path="/:category" component={Category} />
      </Switch>
    </div>
  );
}

export default App;
