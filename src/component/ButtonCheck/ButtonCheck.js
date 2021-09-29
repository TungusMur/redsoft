import { useEffect } from 'react';

const ButtonCheck = ({ bag, setBag, namePicture }) => {
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
        console.log(bag);
        // localStorage.setItem('bag', JSON.stringify({ ...bag }));
      }}
      className={bag[namePicture]}
    >
      {bag[namePicture] === 'active' ? null : <img alt="check" src="../img/check.svg" />}
      {bag[namePicture] === 'active' ? 'Купить' : 'В корзине'}
    </button>
  );
};

export default ButtonCheck;
