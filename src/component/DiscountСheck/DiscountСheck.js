/* eslint-disable no-nested-ternary */
import ButtonCheck from '../ButtonCheck';
import './DiscountСheck.scss';

const DiscountСheck = ({ namePicture, price, discount, status, bag, setBag }) =>
  status === 'active' ? (
    discount > 0 ? (
      <div className="price">
        <div className="price-front">
          <p className="oldPrice">{`${price}$`}</p>
          <p className="nowPrice">{`${price - discount}$`}</p>
        </div>
        <ButtonCheck bag={bag} setBag={(e) => setBag(e)} namePicture={namePicture} />
      </div>
    ) : (
      <div className="price">
        <div className="price-front">
          <p className="oldPrice"></p>
          <p className="nowPrice">{`${price}$`}</p>
        </div>
        <ButtonCheck bag={bag} setBag={(e) => setBag(e)} namePicture={namePicture} />
      </div>
    )
  ) : (
    <div className="price">
      <div className="price-front">
        <p className="oldPrice"></p>
        <p className="nowPrice">Продана на аукционе</p>
      </div>
      <ButtonCheck bag={bag} setBag={(e) => setBag(e)} namePicture={namePicture} />
    </div>
  );

export default DiscountСheck;
