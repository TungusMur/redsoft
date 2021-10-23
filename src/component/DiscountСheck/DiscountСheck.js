/* eslint-disable no-nested-ternary */
import ButtonCheck from '../ButtonCheck';
import './DiscountСheck.scss';

const DiscountСheck = ({ id, namePicture, price, discount, status, bag, setBag, statusLoading, loading }) =>
  status === 'active' ? (
    discount > 0 ? (
      <div className="price">
        <div className="price-front">
          <p className="oldPrice">{`${price}$`}</p>
          <p className="nowPrice">{`${price - discount}$`}</p>
        </div>
        <ButtonCheck
          id={id}
          bag={bag}
          setBag={(e) => setBag(e)}
          namePicture={namePicture}
          statusLoading={statusLoading}
          loading={(e) => loading(e)}
        />
      </div>
    ) : (
      <div className="price">
        <div className="price-front">
          <p className="oldPrice"></p>
          <p className="nowPrice">{`${price}$`}</p>
        </div>
        <ButtonCheck
          id={id}
          bag={bag}
          setBag={(e) => setBag(e)}
          namePicture={namePicture}
          statusLoading={statusLoading}
          loading={(e) => loading(e)}
        />
      </div>
    )
  ) : (
    <div className="price">
      <div className="price-front">
        <p className="oldPrice"></p>
        <p className="nowPrice">Продана на аукционе</p>
      </div>
      <ButtonCheck
        id={id}
        bag={bag}
        setBag={(e) => setBag(e)}
        namePicture={namePicture}
        statusLoading={statusLoading}
        loading={(e) => loading(e)}
      />
    </div>
  );

export default DiscountСheck;
