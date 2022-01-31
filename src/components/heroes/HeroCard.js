import React from 'react';
//import { Link } from 'react-router-dom';

export const HeroCard = ({item}) => {

    return <>
    <div className="card ms-3 animate__animated animate__fadeIn mt-5" style={ { maxWidth: 540 } }>
                <div className="row no-gutters">
    
                    <div className="container">
                        
                        <div className="card-body">
                            <h5 className="card-title"> { item.name } </h5>
                            <p className="card-text"> <b>Price USD: </b> {item.price_usd} </p>
                            <p className="card-text"> <b>Price BTC: </b> {item.price_btc} </p>
                            <p className="card-text"> <b>Volumen 24h: </b> {item.volume24} </p>
                            <p className="card-text"> <b>Csupply:</b> {item.csupply} </p>
                            <p className="card-text"> <b>Market Cap Usd:</b>  {item.volume24} </p>
                            <p className="card-text"> <b>Percent Change 1h:</b>  {item.percent_change_1h} </p>
                            <p className="card-text"> <b>Percent Change 7d:</b>  {item.percent_change_7d} </p>
                            <p className="card-text"> <b>Percent Change 24h:</b>  {item.percent_change_24h} </p>
                            <p className="card-text">
                                <small className="text-muted"> { item.symbol } </small>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
    </>

}




{
    /*



    <div className="table-responsive">
    
    <table class="table">

    <tbody className="align-top">
      <tr>
        <th scope="row "></th>
        <td>Name: {name}</td>
        <td>Price: {price_usd}</td>
        <td>Market Cap: {market_cap_usd}</td>
        <td>%1h: {percent_change_1h}</td>
        <td>%24h: {percent_change_24h}</td>
        <td>%1h: {percent_change_1h}</td>
        <td>Vol 24h: {volume24}</td>
      </tr>
    </tbody>
  </table>
  </div>





        <div className="card ms-3 animate__animated animate__fadeIn mt-5" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">

                <div className="">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { name } </h5>
                        <p className="card-text"> Precio en USD: {price_usd} </p>
                        <p className="card-text"> Precio en BTC: {price_btc} </p>
                        <p className="card-text"> Volumen 24h: {volume24} </p>
                        <p className="card-text">
                            <small className="text-muted"> { symbol } </small>
                        </p>

                        
                        <Link to={ `./coin/${name}` }>
                            Más...
                        </Link>
                        

                    </div>

                </div>
            </div>
        </div>
    */
}