import React from "react";

function RightImg({ imgUrl, productName, productDes, link, linkUrl }) {
  return (
    <div className="container my-5">
      <div className="row text-muted">
        <div className="col-12 mt-5 p-5 col-lg-6">
          <h1 className="mt-5">{productName}</h1>
          <p className="my-3">{productDes}</p>
          <a href={linkUrl}>{link}</a>
        </div>
        <div className="col-12 col-lg-6">
          <img src={imgUrl} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
}

export default RightImg;
