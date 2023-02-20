import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import './cartContaines.css';

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);

  return (
    <div>
      <p>Mis productos</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <button onClick={clearProductCartList} className="vaciarCarrito">Vaciar el carrito</button>
          </>
          :
          <p>No has agregado productos aún.</p>
        }
      </div>
    </div>
  )
}
