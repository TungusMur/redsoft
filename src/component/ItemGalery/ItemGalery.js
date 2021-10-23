/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import DiscountСheck from '../DiscountСheck';
import './ItemGalery.scss';

const ItemsGalery = ({ galery, loading }) => {
  const [bag, setBag] = useState(
    JSON.parse(localStorage.getItem('bag')) ? JSON.parse(localStorage.getItem('bag')) : {}
  );
  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify({ ...bag }));
  }, [bag]);
  return (
    <ul>
      {galery.map((item) => (
        <li key={item.namePicture} className={`itemGalery ${item.status}`}>
          <img className="picture" alt={item.namePicture} src={item.picture} />
          <p className="namePicture">{item.namePicture}</p>
          <DiscountСheck
            id={item.id}
            namePicture={item.namePicture}
            price={item.price}
            discount={item.discount}
            status={item.status}
            bag={bag}
            setBag={(e) => setBag(e)}
            statusLoading={item.addLoading}
            loading={(e) => loading(e)}
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
