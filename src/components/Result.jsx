import React from 'react'
import NumberFormat from 'react-number-format';

const Result = (props) => {
    return (
        <div>
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
                        <td><NumberFormat value={props.money} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                        <td><NumberFormat value={props.money_rub} displayType={'text'} thousandSeparator={true} prefix={'₽'} /></td>
                        <td><NumberFormat value={props.streams} displayType={'text'} thousandSeparator={true} /> </td>
                    </tr>
                    <tr>
                        <td>В месяц</td>
                        <td><NumberFormat value={(props.money / 12).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </td>
                        <td><NumberFormat value={(props.money_rub / 12).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₽'} /></td>
                        <td><NumberFormat value={(props.streams / 12).toFixed()} displayType={'text'} thousandSeparator={true} /></td>
                    </tr>
                    <tr>
                        <td>В неделю</td>
                        <td><NumberFormat value={(props.money / 48).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </td>
                        <td><NumberFormat value={(props.money_rub / 48).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₽'} /></td>
                        <td><NumberFormat value={(props.streams / 48).toFixed()} displayType={'text'} thousandSeparator={true} /></td>
                    </tr>
                    <tr>
                        <td>В день</td>
                        <td><NumberFormat value={(props.money / 365).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </td>
                        <td><NumberFormat value={(props.money_rub / 365).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'₽'} /> </td>
                        <td><NumberFormat value={(props.streams / 365).toFixed()} displayType={'text'} thousandSeparator={true} /></td>
                    </tr>
                </tbody>
            </table>
            <p className="info">Данные приблизительны и могут варьироваться</p>
        </div>
    )
}

export default Result
