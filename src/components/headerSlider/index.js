import React from "react";
import { useNavigate } from "react-router-dom";
import img_happyGirl from "../../assets/images/happy-girl.jpg";
import img_fanGroup from "../../assets/images/fan-group.jpg";
import { Button, Carousel } from "antd";

function HeaderSlider() {
  // url location
  const navigate = useNavigate();

  // handle
  const _handleClick = () => {
    navigate(`search?sport`);
  };

  // list
  const list = [
    {
      description: "Get access to exclusive contents of your team's life",
      img: img_fanGroup,
    },
    {
      description: "Interact with your favorite athletes through video calls",
      img: img_happyGirl,
    },
  ];

  return (
    <Carousel autoplay>
      {list.map((item) => (
        <>
          <div
            className="row"
            style={{
              margin: 0,
              backgroundColor: "#f3c051",
              background: "#f3c051",
            }}
          >
            <div
              className={"col-8"}
              style={{
                background: `url(${item.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: 420,
              }}
            ></div>
            <div className={"col-4"}>
              <div className={"text-center my-5"}>
                <h2>{item.description}</h2>
                <Button size="large" onClick={_handleClick} className={"mt-4"}>
                  Try now !
                </Button>
              </div>
            </div>
          </div>
        </>
      ))}
    </Carousel>
  );
}

export default HeaderSlider;
