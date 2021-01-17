import React from "react";
import { Link } from "react-router-dom";

function BannerSection(props) {
  const { data } = props;

  return (
    <div className="container">
      <div className="row justify-content-center">
        {data.map((item, index) => (
          <div
            className={data.length === 1 ? "col-12" : "col-md-6 col-lg-4"}
            key={index}
          >
            <div className="banner banner-group banner-overlay banner-overlay-light">
              <Link
                to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}
                style={{ height: data.length === 1 ? 200 : 150 }}
              >
                <img
                  src={item.image}
                  alt="Banner"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </Link>

              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <Link to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}>
                    {item.name}
                  </Link>
                </h4>

                <h3 className="banner-title">
                  <Link to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}>
                    {item.name}
                  </Link>
                </h3>

                <Link
                  to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}
                  className="banner-link"
                >
                  Shop Now<i className="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(BannerSection);
