import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 col-12 p-4 order-sm-2 order-lg-1">
          <h1 className="mb-3 fs-2">Unbetable Pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-lg-2 order-lg-2"></div>
        <div className="col-lg-6 col-12 p-4 order-sm-1 order-lg-3">
          <div className="row text-center">
            <div className="col border p-3 mx-2">
              <h2>₹0</h2>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col border p-3 mx-2">
              <h2>₹20</h2>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
