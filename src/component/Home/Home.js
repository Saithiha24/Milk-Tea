import React from "react";
import Footer from "../../UI/Footer";
import Delivery from "./Delivery";
import PopularItems from "./PopularItems";

const Home = () => {
  return (
    <>
      <PopularItems />
      <Delivery />
      <Footer />
    </>
  );
};

export default Home;
