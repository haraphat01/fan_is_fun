import React from "react";
import { useNavigate } from "react-router-dom";
import img_hockey from "../../assets/images/sports/hockey.png";
import img_foot from "../../assets/images/sports/foot.png";
import img_volley from "../../assets/images/sports/volley.png";
import img_basket from "../../assets/images/sports/basket.png";

function SportList() {
  // url location
  const navigate = useNavigate();

  // handle
  const _handleClick = (value) => {
    navigate(`search?sport=${value}`);
  };

  // list
  const list = [
    {
      description: "Football",
      img: img_foot,
    },
    {
      description: "Hockey",
      img: img_hockey,
    },

    {
      description: "Volley ball",
      img: img_volley,
    },
    {
      description: "Basket ball",
      img: img_basket,
    },
  ];

  return (
    <div className="row">
      {list.map((item) => (
        <div className="col-3">
          <div
            onClick={() => _handleClick(item.description)}
            className={"feed-card position-relative rounded overflow-hidden"}
            style={{
              background: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <div
              className={
                "feed-card-content text-white p-3 bottom-0 position-absolute w-100"
              }
              style={{
                backgroundColor: "rgba(18,33,39,0.74)",
              }}
            >
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SportList;
