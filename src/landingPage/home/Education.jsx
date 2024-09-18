import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-12 p-4 order-2 order-lg-1 order-md-2">
          <img src="media/education.svg" alt="" style={{width:"80%"}}/>
        </div>
        <div className="col-lg-2 order-lg-2"></div>

        <div className="col-lg-4 col-12 p-4 order-1 order-lg-3 order-md-1">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="mb-0 mt-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity
            &nbsp;&nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mb-0 mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A&nbsp;&nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
