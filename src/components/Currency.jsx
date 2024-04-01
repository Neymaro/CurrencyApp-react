import React, { useEffect, useState } from 'react'
import '../style.css'
import axios from 'axios'

function Currency() {
  const [search , setSearch] = useState("")
  const [currency,setCurrency] = useState([])
  const [filter , setFilter] = useState("10")
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://openapiv1.coinstats.app/coins?limit=${filter}`, {
          headers: { 'X-API-KEY': 'CbQr3bMgoPbetVrvbsu4AGBsw3y0uG6Fk7kqvw+0rqg=' }
        });
        setCurrency(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData(); 
  }, [filter]);

  return (
    <div className='content'>
      <div className='first'> 
      <input 
      className='search' 
      placeholder='Search a coin' 
      onChange={(e)=>setSearch(e.target.value)}/>
       <input 
      className='filternumber' 
      placeholder='Top ?' 
      onChange={(e)=>setFilter(e.target.value)}/>
      </div>
      <div className='second'>
        <table className='table'>
          <thead>
          <tr>
            <th>Rank</th>
            <th>Cryto</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Supply</th>
            <th>Volume(Last24h)</th>
          </tr>
          </thead>
          <tbody>
            {currency.filter((val)=>{
              return val.name.toLowerCase().includes(search.toLowerCase())
            }).map((val)=> {
              return <tr>
                <td className='val'>{val.rank}</td>
                <td className='logo'>
                  <a href={val.websiteUrl}>
                    <img src={val.icon} alt=""/>
                  </a>
                  <p>{val.name}</p>
                </td>
                <td className='symbol'>{val.symbol}</td>
                <td className='marketCap'>$ {val.marketCap}</td>
                <td className='price'>$ {val.price.toFixed(2)}</td>
                <td className='supply'>{val.availableSupply}</td>
                <td className='volume'>{val.volume.toFixed(0)}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Currency