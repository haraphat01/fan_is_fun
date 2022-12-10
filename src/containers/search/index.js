import React, { useState } from "react";
import Card from "../../components/popularList/card";
import celebrities from "../../mockApi/celebData";
import { useNavigate } from "react-router-dom";
import { Tag } from "antd";
const { CheckableTag } = Tag;

const tagsfilters = ["Football", "Volley", "Basketball", "Hockey"];

export default function ResultPage() {
  const [selectedTags, setSelectedTags] = useState(["Books"]);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  // url location
  const navigate = useNavigate();

  // handle
  const goToProfile = (value) => {
    navigate(`/profile/${value}`);
  };

  return (
    <div className="container">
      <div className={`row mt-4`}>
        <div className={`col-4`}></div>
        <div className={`col-8`}>
          <div className={`mb-5`}>
            <h3 style={{ color: "#d5d5d5" }}>Filter by categories</h3>
            <div className="d-flex">
              {tagsfilters.map((tag) => (
                <CheckableTag
                  key={tag}
                  className={"mr-3 border fs-6"}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={(checked) => handleChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
          </div>
          <h3 style={{ color: "#d5d5d5" }}>Search results</h3>
          <div className={`row`}>
            {celebrities.map((item) => (
              <div
                key={item.id}
                className={`col-4 my-3`}
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
        </div>
      </div>
    </div>
  );
}
