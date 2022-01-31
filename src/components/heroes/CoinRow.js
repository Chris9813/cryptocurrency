import React from 'react';
import { Link } from 'react-router-dom';

export const CoinRow = ({coin, id}) => {
  return (
    <tr>
        <td>{id}</td>
        <td>
            
        {
        <Link to={ `./coin/${coin.name}` }>
            {coin.name}
        </Link>
        }
        <span className='mx-3 text-muted text-uppercase'>{coin.symbol}</span>
        </td>
        <td>{coin.price_usd}</td>
        <td className={coin.percent_change_24h > 0 ? "text-success" : "text-danger"}>
            {coin.percent_change_24h}
        </td>
        <td>{coin.volume24}</td>
    </tr>
    )
};
