import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-3">404 Page NotFound</h1>
        <p>Sorry This Page Not Exist!!</p>
        <Link to={"/"}>
          <button className="btn btn-primary">Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
