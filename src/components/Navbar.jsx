import React from 'react'
import '../style.css'
import { LuBitcoin } from "react-icons/lu";


function Navbar() {
  return (
    <div className='navbar'>
      <LuBitcoin />
      <p>Coin<span className='title'>Surge</span></p>
   </div>
  )
}

export default Navbar