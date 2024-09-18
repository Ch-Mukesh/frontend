import React from "react";

function Hero() {
  return (
    <div className="container-fluid bg-primary text-white">
      <div className="d-flex  p-5 pb-0 justify-content-between">
        <h3 className="fs-4 fw-normal">Support Portal</h3>
        <a href="" className="fs-6 text-white">
          Track tickets
        </a>
      </div>
      <div className="row mb-5">
        <div className="col-12 col-md-6 p-5">
          <h3 className="fs-4 fw-normal">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <form action="" role="search" className="my-4">
            <input
              type="search"
              placeholder="Type your Ticket Number"
              className="form-control"
            />
          </form>
          <a href="" className="text-white text-decoration-underline me-3">
            Track account opening{" "}
          </a>
          <a href="" className="text-white text-decoration-underline me-3">
            Track segment activation{" "}
          </a>
          <a href="" className="text-white text-decoration-underline me-3">
            Intraday margins{" "}
          </a>
          <a href="" className="text-white text-decoration-underline me-3">
            Kite user manual
          </a>
        </div>
        <div className="col-12 col-md-6 p-5">
          <h3 className="fs-4 fw-normal mb-3">Featured</h3>
          <p>
            Due to the settlement holiday on Monday, your account balance will
            not include the following credits on 16 September, 2024:
          </p>
          <ul className="p-0">
            <li>
              Intraday profits made in the Equity segment on Sept 13, 2024.
            </li>
            <li>
              Credits from trades made in NFO, Currency, and Commodity
              derivatives on Sept 13, 2024. This will include options premium
              credits, futures M2M profits, etc. <a href="" className="text-white text-decoration-underline">Read more.</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
