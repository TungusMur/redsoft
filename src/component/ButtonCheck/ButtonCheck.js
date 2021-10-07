/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
const ButtonCheck = ({ bag, setBag, namePicture, loading, statusLoading }) => {
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
        loading(namePicture);
      }}
      className={bag[namePicture]}
    >
      {statusLoading.loading && statusLoading.namePicture === namePicture ? null : bag[namePicture] ===
        'active' ? null : (
        <img alt="check" src="../img/check.svg" />
      )}
      {statusLoading.loading && statusLoading.namePicture === namePicture
        ? '...загрузка'
        : bag[namePicture] === 'active'
        ? 'Купить'
        : 'В корзине'}
    </button>
  );
};

export default ButtonCheck;
