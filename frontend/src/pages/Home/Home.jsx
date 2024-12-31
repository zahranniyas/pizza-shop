import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import PizzaDisplay from "../../components/PizzaDisplay/PizzaDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <PizzaDisplay category={category} />
    </>
  );
};

export default Home;
