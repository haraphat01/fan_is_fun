import React, { useState, useEffect } from "react";
import Card from "../../components/popularList/card";
import mockPlayers from "../../mockApi/celebData";
import mockTeams from "../../mockApi/mockTeams";
import { useNavigate } from "react-router-dom";
import { Tag, Collapse, Slider, Radio, Space, Skeleton } from "antd";
import { useLocation } from "react-router-dom";

const { CheckableTag } = Tag;
const { Panel } = Collapse;

const celebrities = [...mockPlayers, ...mockTeams];

const tagsfilters = ["Premier League", "World cup", "NBA", "Hockey cup"];

export default function ResultPage() {
  const [loading, setLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState(["Books"]);
  const [value, setValue] = useState(1);

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

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const _onPriceChange = (range) => {
    console.log(range[0]);
    console.log(range[1]);
    _fakeCall();
  };

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
    _fakeCall();
  };

  // url location
  const navigate = useNavigate();

  // handle
  const goToProfile = (value) => {
    navigate(`/profile/${value}`);
  };

  const _fakeCall = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <div className={`row mt-4`}>
        {/* filter */}
        <div className={`col-4`}>
          <h3 style={{ color: "#d5d5d5" }}>Filters</h3>
          <Collapse
            classname={"mt-4"}
            defaultActiveKey={["1"]}
            // onChange={onChange}
          >
            <Panel header="Price" key="1">
              <p>
                <Slider
                  range
                  min={100}
                  max={25000}
                  defaultValue={[300, 10000]}
                  onAfterChange={_onPriceChange}
                />
              </p>
            </Panel>
            <Panel header="Sports" key="2">
              <p>
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={"Football"}>Football</Radio>
                    <Radio value={"Volley"}>Volley</Radio>
                    <Radio value={"Basketball"}>Basketball</Radio>
                    <Radio value={"Hockey"}>Hockey</Radio>
                  </Space>
                </Radio.Group>
              </p>
            </Panel>
            <Panel header="Top Teams" key="3">
              <p>
                <Radio.Group
                  onChange={() => {
                    _fakeCall();
                  }}
                  value={value}
                >
                  <Space direction="vertical">
                    <Radio value={"Football"}>Argentina</Radio>
                    <Radio value={"Volley"}>Russia</Radio>
                    <Radio value={"Basketball"}>Cameroon</Radio>
                    <Radio value={"Hockey"}>Nigeria</Radio>
                  </Space>
                </Radio.Group>
              </p>
            </Panel>
            <Panel header="Top Players" key="4">
              <p>
                <Radio.Group
                  onChange={() => {
                    _fakeCall();
                  }}
                  value={value}
                >
                  <Space direction="vertical">
                    <Radio value={"Football"}>Leonel Messi</Radio>
                    <Radio value={"Volley"}>Ronaldo</Radio>
                    <Radio value={"Basketball"}>Abramov Nikita</Radio>
                    <Radio value={"Hockey"}>Pitson borellio</Radio>
                  </Space>
                </Radio.Group>
              </p>
            </Panel>
          </Collapse>
        </div>
        {/* main */}
        <div className={`col-8`}>
          <div className={`mb-5`}>
            <h3 style={{ color: "#d5d5d5" }}>Popular competitions</h3>
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

          {/* loading  */}
          {loading && (
            <div className="row">
              <div className={`col-4 my-3`}>
                <Skeleton.Image
                  active={true}
                  style={{ height: 300, width: 220 }}
                />
              </div>
              <div className={`col-4 my-3`}>
                <Skeleton.Image
                  active={true}
                  style={{ height: 300, width: 220 }}
                />
              </div>
              <div className={`col-4 my-3`}>
                <Skeleton.Image
                  active={true}
                  style={{ height: 300, width: 220 }}
                />
              </div>
              <div className={`col-4 my-3`}>
                <Skeleton.Image
                  active={true}
                  style={{ height: 300, width: 220 }}
                />
              </div>
              <div className={`col-4 my-3`}>
                <Skeleton.Image
                  active={true}
                  style={{ height: 300, width: 220 }}
                />
              </div>
              <div className={`col-4 my-3`}>
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
          )}
        </div>
      </div>
    </div>
  );
}
