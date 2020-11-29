import './App.css';
import Content from './components/content';
import Header from './components/header';
import { useEffect, useState } from 'react'
import Footer from './components/footer';


function App() {
  const allGoods = [
    {id: 1, title: "Детское кресло", price: "6400", sort: 'chair', img: './img/goodsCard/1.jpg'},
    {id: 2, title: "Диван Forest", price: "24990", sort: 'sofa', img: './img/goodsCard/2.jpg'},
    {id: 3, title: "Диван Red Vine", price: "54990", sort: 'sofa', img: './img/goodsCard/3.jpg'},
    {id: 4, title: "Диван Yellow", price: "29990", sort: 'sofa', img: './img/goodsCard/4.jpg'},
    {id: 5, title: "Диван Валенсия", price: "89990", sort: 'sofa', img: './img/goodsCard/5.jpg'},
    {id: 6, title: "Диван Куба", price: "39900", sort: 'sofa', img: './img/goodsCard/6.jpg'},
    {id: 7, title: "Диван Лион", price: "42900", sort: 'sofa', img: './img/goodsCard/7.jpg'},
    {id: 8, title: "Диван Милан", price: "69900", sort: 'sofa', img: './img/goodsCard/8.jpg'},
    {id: 9, title: "Настольная лампа Steel", price: "3700", sort: 'lamp', img: './img/goodsCard/9.jpg'},
    {id: 10, title: "Настольная лампа Venice", price: "8400", sort: 'lamp', img: './img/goodsCard/10.jpg'},
    {id: 11, title: "Настольная лампа Volcano", price: "4800", sort: 'lamp', img: './img/goodsCard/11.jpg'},
    {id: 12, title: "Офисное кресло Orange", price: "4800", sort: 'chair', img: './img/goodsCard/12.jpg'},
]

  const [goods, setGoods] = useState(allGoods)

  const [time, setTime] = useState(new Date())


function sortItems (sort) {
  setGoods(allGoods)
  setGoods((prevGoods) => prevGoods.filter(good => good.sort === sort))
}

function showAll () {
  setGoods(allGoods)
}

useEffect(() => {
  const clockInterval = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(clockInterval);
}, []);


  return (
    <div className="App">
      <Header time={time} />
      <Content goods={goods} sortHandler={sortItems} showAll={showAll}  />
      <Footer />
    </div>
  );
}

export default App;
