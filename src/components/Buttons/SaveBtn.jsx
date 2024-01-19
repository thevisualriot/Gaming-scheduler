import React from 'react'
import { FaHeart } from "react-icons/fa";

const SaveBtn = (props) => {
  return (
    <button className='rounded-full border-cyan outline-2 bg-transparent'  onClick={props.onClick}>
        {<FaHeart />}{props.name}
    </button>
  )
}

export default SaveBtn