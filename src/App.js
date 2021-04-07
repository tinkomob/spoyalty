import spotify from './spotify.png';
import React, { useState, useEffect, useRef  } from 'react';
import NumberFormat from 'react-number-format';
import './App.css';

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
          var input_money =  e.value;
          var calc_streams = (input_money / spotifyRvalue).toFixed();
          var ruMoney = Number(input_money * rub_rate).toFixed();
          setRubles(ruMoney)
          setMoney(input_money);
          setStreams(calc_streams);
          
        }}/>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>$</th>
              <th>₽</th>
              <th>Стримы</th>
            </tr>
            <tr>
              <td>В год</td>
              <td><NumberFormat value={money} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
              <td><NumberFormat value={money_rub} displayType={'text'} thousandSeparator={true} prefix={'₽'}/></td>
              <td><NumberFormat value={streams} displayType={'text'} thousandSeparator={true} /> </td>
            </tr>
            <tr>
              <td>В месяц</td>
              <td><NumberFormat value={(money / 12).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}/> </td>
              <td><NumberFormat value={(money_rub / 12).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₽'}/></td>
              <td><NumberFormat value={(streams / 12).toFixed()} displayType={'text'} thousandSeparator={true} /></td>
            </tr>
            <tr>
              <td>В неделю</td>
              <td><NumberFormat value={(money / 48).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}/> </td>
              <td><NumberFormat value={(money_rub / 48).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₽'}/></td>
              <td><NumberFormat value={(streams / 48).toFixed()} displayType={'text'} thousandSeparator={true} /></td>
            </tr>
            <tr>
              <td>В день</td>
              <td><NumberFormat value={(money / 365).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}/> </td>
              <td><NumberFormat value={(money_rub / 365).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₽'}/> </td>
              <td><NumberFormat value={(streams / 365).toFixed()} displayType={'text'} thousandSeparator={true} /></td>
            </tr>
          </tbody>
        </table>
        <p className="info">Данные приблизительны и могут варьироваться</p>
        
      </header>
    </div>
  );
}

export default App;
