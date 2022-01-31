import React from 'react';
import { CoinRow } from './CoinRow';


const title = ["#", "Coin","Price", "Percent Change 24h", "24h Volume"]

export const Table = ({coins, search}) => {
    
    const fil = coins.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase()) |
    coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
    return <>
    <table className="table table-hover" id="mydatatable">
        <thead>
            <tr>
                {
                    title.map((title, i) => (
                        <td key={i}>{title}</td>
                    ))
                }
            </tr>
        </thead>
        <tbody>
        {
            fil.map((coin,i) => (
                <CoinRow coin={coin} key={i} id={i+1} /> 
            ))
        }

        </tbody>
    </table>
</>
}
