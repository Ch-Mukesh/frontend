import React from "react";

function LeftImg({
  imgUrl,
  productName,
  productDes,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row text-muted">
        <div className="col-12 col-lg-6">
          <img src={imgUrl} alt="" className="w-100"/>
        </div>
        <div className="col-12 mt-5 p-4 col-lg-6">
          <h1>{productName}</h1>
          <p>{productDes}</p>
          <div className="row">
            <div className="col">
              <a href={tryDemo} >Try Demo →</a>
              <br /><br />
              <a href={googlePlay}>
                <img src="media/googlePlayBadge.svg" alt="" />
              </a>
            </div>
            <div className="col">
              <a href={learnMore}>LearnMore →</a>
              <br /><br />
              <a href={appStore}>
                <img src="media/appstoreBadge.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImg;
