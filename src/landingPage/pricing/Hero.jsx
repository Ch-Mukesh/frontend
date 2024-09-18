import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center my-5 p-4">
        <h1 className="mt-5 mb-3">Pricing</h1>
        <h5 className="mb-5 fs-4 text-muted">Free equity investments and flat ₹20 intraday and F&O trades</h5>
        <div className="col-12 col-lg-4 my-5">
          <img src="media/pricing0.svg" alt=""  className="w-75 mt-5"/>
          <h4 className="mb-3">Free equity delivery</h4>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-lg-4 my-5">
          <img src="media/intradayTrades.svg" alt=""  className="w-75 mt-5" />
          <h4 className="mb-3">Intraday and F&O trades</h4>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-lg-4 my-5">
          <img src="media/pricingMF.svg" alt=""  className="w-75 mt-5"/>
          <h4 className="mb-3">Free direct MF</h4>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
