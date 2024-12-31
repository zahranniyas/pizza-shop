import React, { useContext, useState } from "react";
import "./PizzaItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const PizzaItem = ({ image, name, price, desc, id }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, url, currency } =
    useContext(StoreContext);

  return (
    <div className="pizza-item">
      <div className="pizza-item-img-container">
        <img
          className="pizza-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="pizza-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="pizza-item-info">
        <div className="pizza-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="pizza-item-desc">{desc}</p>
        <p className="pizza-item-price">
          {currency}
          {price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default PizzaItem;
