import React from "react";

function Brokerage() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-8">
          <a href="" className="mx-auto">
            <h4 className="fs-5 text-center">Brokerage calculator</h4>
          </a>
          <ul className="mt-5 fw-light text-muted fs-6">
            <li className="my-2">Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li className="my-2">Digital contract notes will be sent via e-mail.</li>
            <li className="my-2">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li className="my-2">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li className="my-2">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li className="my-2">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
          </ul>
        </div>
        <div className="col-4">
          <a href="">
            <h4 className="fs-5 text-center">List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
