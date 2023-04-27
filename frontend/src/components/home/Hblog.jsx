import React from "react";
import "../blog/blog.css";
import { blog } from "../../dummydata";
import Heading from "../common/heading/Heading";
import "semantic-ui-css/semantic.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className=""></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className=""></i>
      </button>
    </div>
  );
};

// copy code of blog => blogCard

const Hblog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Heading subtitle="OUR BLOG" title="Recent From MasterDsa Blogs" />
      <Slider {...settings}>
        {blog.map((val) => (
          <section className="blog" >
            <div className="container" style={{padding: '0px 60px'}}>
              <div style={{ paddingTop: "75px" }}>
                <div className="grid2" >
                  <div className="items shadow" >
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text" >
                      <div className="admin flexSB" style={{paddingLeft :'100px'}}>
                        <span>
                          <i className="fa fa-user"></i>
                          <label htmlFor="">{val.type}</label>
                        </span>
                        <span>
                          <i className="fa fa-calendar-alt"></i>
                          <label htmlFor="">{val.date}</label>
                        </span>
                        <span>
                          <i className="fa fa-comments"></i>
                          <label htmlFor="">{val.com}</label>
                        </span>
                      </div>
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </>
  );
};

export default Hblog;
