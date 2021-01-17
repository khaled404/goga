import React from "react";
import { Link } from "react-router-dom";

import { safeContent } from "../../utils";

function IntroSlide(props) {
  const {
    image,
    name,
    subtitle,
    subtitleAdClass,
    price,
    btnText = "Shop More",
  } = props.data;
  return (
    <div className="intro-slide" style={{ backgroundImage: `url( ${image} )` }}>
      <div className="container intro-content">
        <div className="row justify-content-end">
          <div className="col-auto col-sm-7 col-md-6 col-lg-5">
            <h3 className={`intro-subtitle ${subtitleAdClass}`}>{name}</h3>
            <h2
              className="intro-title"
              dangerouslySetInnerHTML={safeContent(name)}
            ></h2>

            <Link
              to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}
              className="btn btn-primary btn-round"
            >
              <span>{btnText}</span>
              <i className="icon-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(IntroSlide);
