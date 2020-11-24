import './App.css';
import Content from './components/content';
import Header from './components/header';
import { useState } from 'react'
import Footer from './components/footer';


function App() {
  let [goods, setGoods] = useState([
    {id: 1, title: "Детское кресло", price: "6400", img: './img/goodsCard/1.jpg'},
    {id: 2, title: "Диван Forest", price: "24990", img: './img/goodsCard/2.jpg'},
    {id: 3, title: "Диван Red Vine", price: "54990", img: './img/goodsCard/3.jpg'},
    {id: 4, title: "Диван Yellow", price: "29990", img: './img/goodsCard/4.jpg'},
    {id: 5, title: "Диван Валенсия", price: "89990", img: './img/goodsCard/5.jpg'},
    {id: 6, title: "Диван Куба", price: "39900", img: './img/goodsCard/6.jpg'},
    {id: 7, title: "Диван Лион", price: "42900", img: './img/goodsCard/7.jpg'},
    {id: 8, title: "Диван Милан", price: "69900", img: './img/goodsCard/8.jpg'}
])

  return (
    <div className="App">
      <Header />
      <Content goods={goods} />
      <Footer />
    </div>
  );
}

export default App;
