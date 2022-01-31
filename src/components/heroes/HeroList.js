import React, { useEffect } from 'react';
import { useState } from 'react';
import {Table} from './Table'

export const HeroList = () => {

    const [state, setstate] = useState([])

    const [start, setStart] = useState(0);
    const [search, setsearch] = useState("");
    
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
    
    
        useEffect(() => {
            getData()
        }, [])


    const handlePrev = () => {
        if(start === 0)return
        setStart(start - 100)
    }
    

    return (
        <div className='container'>
            <input onChange={(e) => setsearch(e.target.value)} type='text' placeholder='Search Coin' className='form-control border-2 mt-lg-4 my-4 ' />
        <div className="row">
            <Table coins={state} search={search} />
        </div>
        
        </div>
    )

}