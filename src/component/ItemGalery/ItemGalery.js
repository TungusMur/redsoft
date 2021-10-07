import { useState, useEffect } from 'react';
import DiscountСheck from '../DiscountСheck';
import './ItemGalery.scss';

const ItemsGalery = ({ galery, loading, statusLoading }) => {
  const [bag, setBag] = useState(
    JSON.parse(localStorage.getItem('bag')) ? JSON.parse(localStorage.getItem('bag')) : {}
  );
  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify({ ...bag }));
  }, [bag]);
  return (
    <ul>
      {galery.listGalery.galery.map((item) => (
        <li key={item.namePicture} className={`itemGalery ${item.status}`}>
          <img className="picture" alt={item.namePicture} src={item.picture} />
          <p className="namePicture">{item.namePicture}</p>
          <DiscountСheck
            namePicture={item.namePicture}
            price={item.price}
            discount={item.discount}
            status={item.status}
            bag={bag}
            setBag={(e) => setBag(e)}
            loading={(e) => loading(e)}
            statusLoading={statusLoading}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemsGalery;

// useEffect(() => {
//   document.getElementById('button').addEventListener('click', () => loading());
//   return () => {
//     document.getElementById('button').removeEventListener('click', () => loading());
//   };
// });
