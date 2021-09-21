import spotify from './spotify.png';
import React, { useState, useEffect, useRef  } from 'react';
import NumberFormat from 'react-number-format';
import './App.css';
import Result from './components/Result';

function App() {
  const [money, setMoney] = useState("");
  const [money_rub, setRubles] = useState("");
  const [streams, setStreams] = useState("");
  const spotifyRvalue = 0.003;
  let [rub_rate, setRubRate] = useState(0);
  
  useEffect( () => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setRubRate(data.Valute.USD.Value); 
    });
  }, [rub_rate]);
 
  return (
    <div className="App">
      <header className="App-header">
        <p>Узнайте, сколько прослушиваний нужно набрать в <img src={spotify} alt=""/> , чтобы заработать N денег</p> 
        <p>Сколько денег тебе нужно?</p>
        <NumberFormat className="money_input" value={money} thousandSeparator={true} prefix={'$'} onValueChange={(e) => {
          setRubles(Number(e.value * rub_rate).toFixed())
          setMoney(e.value);
          setStreams((e.value / spotifyRvalue).toFixed());
        }}/>
        <Result money={money} money_rub={money_rub} streams={streams} />
        
        
      </header>
    </div>
  );
}

export default App;
