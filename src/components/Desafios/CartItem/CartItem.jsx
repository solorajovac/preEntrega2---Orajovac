import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import './CartItem.css';

export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='cart-info-container'>
                <p><strong>{item.title}</strong></p>
                <p>Precio unitario: USD {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio total: {item.totalPrice}</p>
                <button onClick={()=>removeProduct(item.id)} className="button">Eliminar producto</button>
            </div>
        </div>
    )
}
