import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import { useState } from "react";
const Card = ({ book }) => {
  console.log(book)
  const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
  return (

    <>
      {
        book.map((item) => {
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if(thumbnail!=undefined)
          {

            return (
              <>
              <div className='card' onClick={()=>{setShow(true);setItem(item)}}>
                <img src={thumbnail} alt='pic' width="100px" height="50px" />
                <div className="bottom">
                  <h5 className='title'>{item.volumeInfo.title}</h5>
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
              </>
  
            )
          }
          
          


        })
      }
    </>
  )
}

export default Card