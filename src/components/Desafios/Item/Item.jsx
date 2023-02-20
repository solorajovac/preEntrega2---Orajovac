import './Item.css';
import {Link} from 'react-router-dom';

export const Item = ({item})=>{
    return(
        <div className="tarjeta-producto">
            <img src={item.pictureUrl} alt={item.title}/>
            <h4>{item.title}</h4>
            <p>U$D {item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className='boton-ver'>Ver más.</button>
            </Link>
        </div>
    )
}