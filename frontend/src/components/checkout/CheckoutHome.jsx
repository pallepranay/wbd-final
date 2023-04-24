import React from "react";
import Back from "../common/back/Back";
import Checkout from "./Checkout";
import Header from "../common/header/Header"

const CheckoutHome = () => {
  return (
    <>
    <Header/>
      <Back title="CheckOut" />
      <Checkout />
    </>
  );
};

export default CheckoutHome;