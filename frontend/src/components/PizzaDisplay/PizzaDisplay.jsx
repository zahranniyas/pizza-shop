import React, { useContext } from "react";
import "./PizzaDisplay.css";
import PizzaItem from "../PizzaItem/PizzaItem";
import { StoreContext } from "../../Context/StoreContext";

const PizzaDisplay = ({ category }) => {
  const { pizza_list } = useContext(StoreContext);

  return (
    <div className="pizza-display" id="pizza-display">
      <h2>Top dishes near you</h2>
      <div className="pizza-display-list">
        {pizza_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <PizzaItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default PizzaDisplay;
