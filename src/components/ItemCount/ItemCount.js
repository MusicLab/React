import React from 'react'
import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({initial, stock}) => {
    const [count, setCount] = useState(parseInt(initial))
    function decrementCount() {
        if (count > 0)
        {setCount(prevCount => prevCount -1)}
    }
    function incrementCount() {
        if (count < stock)
        {setCount(prevCount => prevCount +1)}
    }
    function myAlert() {
        alert(`Agregaste ${count} items al carrito`);
    }
    function clearState () {
        setCount(parseInt(initial))
    }
    return (
        <div className= "ItemCount">
            <button onClick= {decrementCount}>-</button>
            <span>{count}</span>
            <button onClick= {incrementCount}>+</button>
            <div>
                <p>En Stock: <strong>{stock}</strong> items</p>
            </div>
            <button onClick= { () => { myAlert(); clearState() }}>Agregar al carrito</button>
            
        </div>
    )
}

export default ItemCount