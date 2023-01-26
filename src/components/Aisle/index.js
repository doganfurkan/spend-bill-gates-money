import React from 'react'
import Card from "../Card"
import "./style.css"
import {useSelector} from "react-redux"

export default function Aisle() {
  const items = useSelector((state) => state.items.onsale);
 // console.log(items);
  return (
    <div id="aisle">
        {items.map((item) => {
          return <Card itemBought={item.count} imgSrc={item.image} itemName={item.productName} itemPrice={item.productPrice} key={item.id} id={item.id}/>
        })}
    </div>
  )
}
