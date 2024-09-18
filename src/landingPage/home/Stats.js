import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 p-4 order-2 order-lg-1 mt-5">
          <h1 className="mb-4 fs-2">Trust With Confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 p-4 order-1 order-lg-2">
          <img
            src="media/ecosystem.png"
            alt="ecosystemImage"
            style={{ width: "100%" }}
            className="mt-3"
          />
          <div className="text-center mt-4">
            <a href="" style={{textDecoration:"none"}}>
              Explore Our Products&nbsp;&nbsp;
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="" style={{textDecoration:"none"}}>
              Try This Kit <i className="fa fa-arrow-right" aria-hidden="true"></i>
              &nbsp;&nbsp;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
