import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getGifs } from '../../hooks/useFetch';
import { Table } from './Table';
import { HeroCard } from './HeroCard';

export const HeroScreen = ({ history }) => {

    const {coinId} = useParams()

    const [state, setstate] = useState([])
    
    const getData = async(start=0) => {
        try {
            const url = `https://api.coinlore.net/api/tickers/?start=${start}&limit=100`
            const resp = await fetch(url);
            const {data} = await resp.json();
            setstate(data)
        } catch (error) {
            console.log(error);
        }
    
    }

    const coin = state.filter(item => item.name === coinId)
    
        useEffect(() => {
            getData()
        }, [])
    //(() => getHeroById( heroeId ), [ heroeId ]);
    

    if ( !state ) {
        return <Redirect to="/" />;
    }

    

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    console.log(coin);
    return (
        <div className="mt-1">
            <div className='d-flex justify-content-center'>
            {
            coin.map((item, i) => {
                return <HeroCard item={item} key={i} />
            })
            }
            </div>
            <div className='d-flex justify-content-center'>
                <button 
                    className="btn btn-outline-info my-4 "
                    onClick={ handleReturn }
                >
                    Return
                </button>  
            </div>
        </div>
    )
}


