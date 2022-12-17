import React, { useState, useEffect } from 'react';
import Card from '../../components/popularList/card';
import mockPlayers from '../../mockApi/celebData';
import mockTeams from '../../mockApi/mockTeams';
import { useNavigate } from 'react-router-dom';
import { Tag, Collapse, Slider, Radio, Space, Skeleton } from 'antd';
import { useLocation } from 'react-router-dom';

const { CheckableTag } = Tag;
const { Panel } = Collapse;

const celebrities = [...mockPlayers, ...mockTeams];

const tagsfilters = ['Premier League', 'World cup', 'NBA', 'Hockey cup'];

export default function ResultPage() {
  const [loading, setLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState(['Books']);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);

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

  const onChange1 = (e) => {
    console.log('radio checked', e.target.value);
    setValue1(e.target.value);
    _fakeCall();
  };
  const onChange2 = (e) => {
    console.log('radio checked', e.target.value);
    setValue2(e.target.value);
    _fakeCall();
  };
  const onChange3 = (e) => {
    console.log('radio checked', e.target.value);
    setValue3(e.target.value);
    _fakeCall();
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
          <h3 style={{ color: '#d5d5d5' }}>Filters</h3>
          <Collapse classname={'mt-4'} defaultActiveKey={['1']}>
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
                <Radio.Group onChange={onChange1} value={value1}>
                  <Space direction="vertical">
                    <Radio value={'1'}>Football</Radio>
                    <Radio value={'2'}>Volley</Radio>
                    <Radio value={'3'}>Basketball</Radio>
                    <Radio value={'4'}>Hockey</Radio>
                  </Space>
                </Radio.Group>
              </p>
            </Panel>
            <Panel header="Top Teams" key="3">
              <p>
                <Radio.Group onChange={onChange2} value={value2}>
                  <Space direction="vertical">
                    <Radio value={'1'}>Argentina</Radio>
                    <Radio value={'2'}>Russia</Radio>
                    <Radio value={'3'}>Cameroon</Radio>
                    <Radio value={'4'}>Nigeria</Radio>
                  </Space>
                </Radio.Group>
              </p>
            </Panel>
            <Panel header="Top Players" key="4">
              <p>
                <Radio.Group onChange={onChange3} value={value3}>
                  <Space direction="vertical">
                    <Radio value={'1'}>Leonel Messi</Radio>
                    <Radio value={'2'}>Ronaldo</Radio>
                    <Radio value={'3'}>Abramov Nikita</Radio>
                    <Radio value={'4'}>Pitson borellio</Radio>
                  </Space>
                </Radio.Group>
              </p>
            </Panel>
          </Collapse>
        </div>
        {/* main */}
        <div className={`col-8`}>
          <div className={`mb-5`}>
            <h3 style={{ color: '#d5d5d5' }}>Popular competitions</h3>
            <div className="d-flex">
              {tagsfilters.map((tag) => (
                <CheckableTag
                  key={tag}
                  className={'mr-3 border fs-6'}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={(checked) => handleChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
          </div>
          <h3 style={{ color: '#d5d5d5' }}>Search results</h3>

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
