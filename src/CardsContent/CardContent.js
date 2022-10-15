import React from "react";
import ListOfCard from "../CardList/ListOfCard";
import Footer from "../Footer";
import Cards from "./Cards";
import WalletBalance from "./WalletBalance";

const CardContent = () => {
  return (
    <div>
      <Cards />
      <WalletBalance />
      <ListOfCard />

      <Footer />
    </div>
  );
};

export default CardContent;
