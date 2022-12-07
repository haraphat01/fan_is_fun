import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const ProfileCard = ({
  image = "",
  name = "Borel Tchassem",
  description = "best player",
}) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="profile-img"
        style={{
          minHeight: 240,
          maxHeight: 240,
          backgroundSize: "cover",
          backgroundColor: "#f1f1f1",
        }}
        src={image}
      />
    }
  >
    <Meta title={name} description={description} />
  </Card>
);

export default ProfileCard;
