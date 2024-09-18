import React from "react";

function CreateTicket() {
  return (
    <div className="container my-3">
      <div className="row">
        <h1 className="fs-3 fw-normal my-5">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col mt-3 lh-lg fs-6">
          <h2 className="fs-5 fw-normal mb-3">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>{" "}
            &nbsp;&nbsp;Account Opening
          </h2>
          <a href="">Getting started</a>
          <br />
          <a href="">Online</a>
          <br />
          <a href="">Offline</a>
          <br />
          <a href="">Charges</a>
          <br />
          <a href="">Company, Partnership and HUF</a>
          <br />
          <a href="">Non Resident Indian (NRI)</a>
        </div>
        <div className="col mt-3 lh-lg fs-6">
          <h2 className="fs-5 fw-normal mb-3">
            <i class="fa fa-user-o" aria-hidden="true"></i> &nbsp;&nbsp;Your
            Zerodha Account
          </h2>
          <a href="">Login credentials</a>
          <br />
          <a href="">Your Profile</a>
          <br />
          <a href="">Account modification and segment addition</a>
          <br />
          <a href="">CMR & DP ID</a>
          <br />
          <a href="">Nomination</a>
          <br />
          <a href="">Transfer and conversion of shares</a>
          <br />
        </div>
        <div className="col mt-3 lh-lg fs-6">
          <h2 className="fs-5 fw-normal mb-3">
            <i class="fa fa-bar-chart" aria-hidden="true"></i> &nbsp;&nbsp;
            Trading and Markets
          </h2>
          <a href="">Trading FAQs</a>
          <br />
          <a href="">Kite</a>
          <br />
          <a href="">Margins</a>
          <br />
          <a href="">Product and order types</a>
          <br />
          <a href="">Corporate actions</a>
          <br />
          <a href="">Kite features</a>
          <br />
        </div>
      </div>
      <div className="row my-5">
        <div className="col mt-3 lh-lg fs-6">
          <h2 className="fs-5 fw-normal mb-3">
            <i class="fa fa-credit-card" aria-hidden="true"></i> &nbsp;&nbsp;
            Funds
          </h2>
          <a href="">Adding funds</a>
          <br />
          <a href="">Fund withdrawal</a>
          <br />
          <a href="">eMandates</a>
          <br />
          <a href="">Adding bank accounts</a>
        </div>
        <div className="col mt-3 lh-lg fs-6">
          <h2 className="fs-5 fw-normal mb-3">
            <i class="fa fa-eercast" aria-hidden="true"></i> &nbsp;&nbsp;Your
            Console
          </h2>
          <a href="">IPO</a>
          <br />
          <a href="">Portfolio</a>
          <br />
          <a href="">Funds statement</a>
          <br />
          <a href="">Profile</a>
          <br />
          <a href="">Reports</a>
          <br />
          <a href="">Referral program</a>
          <br />
        </div>
        <div className="col mt-3 lh-lg fs-6">
          <h2 className="fs-5 fw-normal mb-3">
            <i class="fa fa-circle-o-notch" aria-hidden="true"></i> &nbsp;&nbsp;
            Coin
          </h2>
          <a href=""> Understanding mutual funds and Coin</a>
          <br />
          <a href="">Coin app</a>
          <br />
          <a href="">Coin web</a>
          <br />
          <a href="">Transactions and reports</a>
          <br />
          <a href="">National Pension Scheme (NPS)</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
