import React from 'react';
import logo from './logo.svg';
import './App.css';
import chat from './chat.png';
import coin from './coin.png';
import delivery from './f-delivery.png';
import Guarantee from './Guarantee';

function App() {
  const data = [
    {img: delivery, key: 1, title: "Free shipping", description:"Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra curcus."},
    {img: coin, key: 2, title: "100% Money back", description:"Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra curcus."},
    {img: chat, key: 3, title: "Online support 24/7", description:"Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra curcus."}
]
  return (
    <div className="App">
      <header className="App-header">
      {data.map(item => {
          return <Guarantee key={item.key} img={item.img} title={item.title} description={item.description} />
        })}
      </header>
    </div>
  );
}

export default App;
