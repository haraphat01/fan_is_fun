import React, { useEffect } from "react";
import { Avatar, Rate, Tag, Button, Empty } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  PlusOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Fade } from "react-awesome-reveal";
import PopularList from "../../components/popularList";
import sportBg from "../../../src/assets/images/profile-bg.jpg";
import mockPlayers from "../../mockApi/celebData";
import mockTeams from "../../mockApi/mockTeams";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const celebrities = [...mockPlayers, ...mockTeams];

export default function Profile({ props }) {
  // const profile = {
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HV3kN7HA0B9l48I2iPVivwYuL7UroKITzA&usqp=CAU",
  //   name: "borel tchassem",
  //   sport: "Hockey player",

  //   league: "KHL",
  //   club: "Ak bars",
  //   highlights: `Danis is one of the best Russian hockey players.
  //       He is a world champion, 5 times champion of KHL,
  //       Olympic games participant`,
  //   rate: 4,
  //   prices: { video: 400, messaging: 500, merch: 500 },
  // };

  // hooks
  let { userId } = useParams();
  // get profile from mock
  const profile = celebrities.find((x) => x.id == userId);

  // hook
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!profile) {
    return (
      <div className="container">
        <div className="border-top" style={{ height: 500 }}>
          <Empty className="mt-5" description={<h2>PROFILE NOT FOUND</h2>} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="profile">
        <div
          className="profile-cover position-relative"
          style={{
            backgroundColor: "#d5d5d5",
            backgroundImage: `url(${sportBg})`,
            height: 150,
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* PROFILE */}
        <div className="container border-bottom pb-4 mb-4">
          <div className="row">
            <div className="col-12 col-md-4">
              <div
                className="d-flex flex-column align-items-center"
                style={{ top: -50, position: "relative" }}
              >
                <Avatar
                  size={150}
                  src={profile.image}
                  className={"shadow"}
                  icon={<UserOutlined />}
                />
                <Rate allowHalf defaultValue={profile.rate} disabled />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h2 className="mt-4">{profile.name}</h2>
              <div className="d-flex justify-content-space-between">
                <Tag size={"large"}>{profile.sport}</Tag>
                <Tag size={"large"}>{profile.league}</Tag>
                <Tag size={"large"}>{profile.club}</Tag>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h5 className="mt-4">Highlights</h5>
              <p>{profile.highlights}</p>
              <Button
                className="d-flex align-items-center"
                icon={<PlusOutlined />}
              >
                Follow
              </Button>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="container">
          <h3 className="mb-4">Purchase</h3>
          <div className="row">
            {/* videos*/}
            <div className="col-4">
              <Fade left>
                <div className="stock-details ">
                  <div className="row">
                    <div className="col-8">
                      <div className="d-flex fw-bold fs-5 align-items-center">
                        <VideoCameraOutlined />
                        <span className="ms-3">Video calls</span>
                      </div>
                    </div>
                    <div className="col-4 text-end position-relative">
                      <p className="fs-5">{`${profile.prices.video} ₽`}</p>
                    </div>
                  </div>
                  <p>Engage through video call</p>
                </div>
              </Fade>
            </div>

            {/* message */}
            <div className="col-4">
              <div className="stock-details">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex fw-bold fs-5 align-items-center">
                      <MessageOutlined />
                      <span className="ms-3">Message</span>
                    </div>
                  </div>
                  <div className="col-4 text-end position-relative">
                    <p className="fs-5">{`${profile.prices.messaging} ₽`}</p>
                  </div>
                </div>
                <p>Privately message your athelete</p>
              </div>
            </div>

            {/* merch */}
            <div className="col-4">
              <Fade left>
                <div className="stock-details ">
                  <div className="row">
                    <div className="col-8">
                      <div className="d-flex fw-bold fs-5 align-items-center">
                        <ShopOutlined />
                        <span className="ms-3">Merchs</span>
                      </div>
                    </div>
                    <div className="col-4 text-end position-relative">
                      <p className="fs-5">{`${profile.prices.merch} ₽`}</p>
                    </div>
                  </div>
                  <p>Get signed merch from your athlete.</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        {/* SUGGESTIONS */}
        <div className="container mt-5">
          <section className="mb-5">
            <h3>You might also like</h3>
            <PopularList />
          </section>
        </div>
      </div>
    </>
  );
}
