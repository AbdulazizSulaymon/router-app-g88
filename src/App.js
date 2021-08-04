import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import Home from "./pages/Home";
import Mobileapps from './pages/Mobileapps';
import ThemeContext from './theme-context';
import colors from './data/colors';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [theme, setTheme] = useState("dark");
  const [selectedColors, setSelectedColors] = useState(colors.dark);

  useEffect(() => {
    setSelectedColors(colors[theme])
  }, [theme])

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme, colors: selectedColors }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mobileapps" component={Mobileapps} />
          <Route path="/:category" exact > <Category /> </Route>
          <Route path="/:category/:id" > <ProductDetails /> </Route>
        </Switch>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
