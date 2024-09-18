import React from "react";

function Team() {
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row p-4 mt-4">
        <div className="col-12 text-center col-lg-6">
          <img
            src="media/nithinKamath.jpg"
            alt="nithinKamath"
            className="w-75 rounded-circle mb-4"
          />
          <h4 className="fw-normal">Nithin Kamath</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-12 mt-5 col-lg-6" style={{ lineHeight: "1.7" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
