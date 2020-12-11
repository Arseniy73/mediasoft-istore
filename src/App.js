import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import ThemeContext from './utils/themeContext'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemPage from './components/itemPage';
import Blog from './components/blog';
import Payment from './components/payment/payment';
import Cart from './components/cart';

function App() {

  function toggleTheme() {
    let style = document.getElementById('app')
    style.classList.toggle('dark')
  }

  return (
    <div className="App" id="app">
      <BrowserRouter>
        <ThemeContext.Provider  value={toggleTheme}>
          <Header />
        </ThemeContext.Provider>
          <Switch>
            <Route path="/" exact>
              <Content />
            </Route>
            <Route component={ItemPage} path="/itemPage/:id" exact></Route>
            <Route component={Blog} path="/blog" exact></Route>
            <Route component={Payment} path="/payment" exact></Route>
            <Route component={Cart} path="/cart" exact></Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
