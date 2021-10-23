/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
const ButtonCheck = ({ id, bag, setBag, namePicture, statusLoading, loading }) => {
  useEffect(() => {
    if (namePicture && !bag[namePicture]) {
      setBag({ ...bag, [namePicture]: 'active' });
      console.log(bag);
    }
  });
  return (
    <button
      onClick={() => {
        setBag({ ...bag, [namePicture]: 'notActive' });
        loading(id);
      }}
      className={bag[namePicture]}
    >
      {statusLoading ? null : bag[namePicture] === 'active' ? null : <img alt="check" src="../img/check.svg" />}
      {statusLoading ? '...загрузка' : bag[namePicture] === 'active' ? 'Купить' : 'В корзине'}
    </button>
  );
};

export default ButtonCheck;
