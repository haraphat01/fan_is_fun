import React, { useState, useEffect } from "react";
import Card from "../../components/popularList/card";
import teamsList from "../../mockApi/mockTeams";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";
import { useLocation } from "react-router-dom";

export default function Teams() {
  const [loading, setLoading] = useState(true);

  // hook
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  // url location
  const navigate = useNavigate();

  // handle
  const goToProfile = (value) => {
    navigate(`/profile/${value}`);
  };

  return (
    <div className="container">
      {/* main */}
      <div>
        <h3 className="mt-5" style={{ color: "#d5d5d5" }}>
          Our Teams
        </h3>

        {/* loading  */}
        {loading && (
          <div className="row">
            <div className={`col-3 my-3`}>
              <Skeleton.Image
                active={true}
                style={{ height: 300, width: 220 }}
              />
            </div>
            <div className={`col-3 my-3`}>
              <Skeleton.Image
                active={true}
                style={{ height: 300, width: 220 }}
              />
            </div>
            <div className={`col-3 my-3`}>
              <Skeleton.Image
                active={true}
                style={{ height: 300, width: 220 }}
              />
            </div>
            <div className={`col-3 my-3`}>
              <Skeleton.Image
                active={true}
                style={{ height: 300, width: 220 }}
              />
            </div>
            <div className={`col-3 my-3`}>
              <Skeleton.Image
                active={true}
                style={{ height: 300, width: 220 }}
              />
            </div>
            <div className={`col-3 my-3`}>
              <Skeleton.Image
                active={true}
                style={{ height: 300, width: 220 }}
              />
            </div>
          </div>
        )}
        {/* results */}
        {!loading && (
          <div className={`row`}>
            {teamsList.map((item) => (
              <div
                key={item.id}
                className={`col-3 my-3`}
                onClick={() => goToProfile(item.id)}
              >
                <Card
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  hoverable={true}
                  extra={null}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
