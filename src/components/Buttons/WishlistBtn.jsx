import React from 'react';
import './Buttons.css';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const WishlistBtn = (props) => {

    return (
        <button className='flex text-base whitespace-nowrap wishlistBtn' onClick={props.onClick} id={props.id} data-game-url={props.dataUrl} data-game-name={props.dataName} data-game-slug={props.dataSlug}>
            <FaHeart id='fa-heart-solid-icon' /> <FaRegHeart id='fa-heart-outline-icon' />{props.name}
        </button>
    )
}

export default WishlistBtn;