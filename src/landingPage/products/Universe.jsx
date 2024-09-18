import React from "react";

function Universe() {
  return (
    <div className="container" style={{marginTop:"250px" ,marginBottom:"120px"}}>
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-lg-4 col-12 col-md-6 text-muted my-5">
          <img
            src="media/smallcaseLogo.png"
            alt="smallCaseLogo"
            className="w-75 mb-3 h-50"
          />
          <p className="mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-lg-4 col-12 col-md-6 text-muted my-5">
          <img
            src="media/streakLogo.png"
            alt="streakLogo"
            className="w-75 mb-3 h-50"
          />
          <p className="mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-lg-4 col-12 col-md-6 text-muted my-5">
          <img
            src="media/sensibullLogo.svg"
            alt="sensibullLogo"
            className="w-75 mb-3 h-50"
          />
          <p className="mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4 col-12 col-md-6 text-muted my-5">
          <img
            src="media/dittoLogo.png"
            alt="dittoLogo"
            className="w-75 mb-3 h-50"
          />
          <p className="mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-lg-4 col-12 col-md-6 text-muted my-5">
          <img
            src="media/zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            className="w-75 mb-3 h-50"
          />
          <p className="mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-lg-4 col-12 col-md-6 text-muted my-5">
          <img
            src="media/goldenpiLogo.png"
            alt="goldenpiLogo"
            className="w-75 mb-3 h-50"
          />
          <p className="mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button className="btn btn-primary mt-5 w-25 mx-auto">SignUp For Free</button>
      </div>
      
    </div>
  );
}

export default Universe;
