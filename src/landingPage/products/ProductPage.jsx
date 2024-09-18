import React from "react";
import Hero from "./Hero";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftImg
        imgUrl="media/kite.png"
        productName="Kite"
        productDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightImg
        imgUrl="media/console.png"
        productName="Console"
        productDes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="Learn more  →"
        linkUrl="#"
      />

      <LeftImg
        imgUrl="media/coin.png"
        productName="Coin"
        productDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightImg
        imgUrl="media/kiteconnect.png"
        productName="Kite Connect API"
        productDes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="Kite Connect   →"
        linkUrl="#"
      />

<LeftImg
        imgUrl="media/varsity.png"
        productName="Varsity Mobile"
        productDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
