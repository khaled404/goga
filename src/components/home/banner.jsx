import React from "react";
import { Link } from "react-router-dom";

function banner(props) {
  const { icon, name_en } = props.data;
  return (
    <div>
      <Link
        to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}
        className="cat-block"
      >
        <figure>
          <span>
            <img src={icon} alt="Category" style={{ height: 100 }} />
          </span>
        </figure>

        <h3 className="cat-block-title">{name_en}</h3>
      </Link>
    </div>
  );
}

export default React.memo(banner);
