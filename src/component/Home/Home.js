import React from "react";
import Footer from "../../UI/Footer";
import Delivery from "./Delivery";
import PopularItems from "./PopularItems";

const Home = () => {
  return (
    <div>
      <PopularItems />
      <Delivery />
      <Footer />
    </div>
  );
};

export default Home;
