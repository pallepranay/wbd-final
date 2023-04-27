import React from "react";
import Heading from "../common/heading/Heading";
import { price } from "../../dummydata";
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

const Hprice = () => {
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
      <br />
      <br />
      <br />
      <Heading subtitle="OUR PRICING" title="Pricing & Packages" />
      <Slider {...settings}>
        {price.map((val) => (
          <section className="hprice">
            <div
              className="price container grid"
              style={{ padding: "30px 100px" }}
            >
              <div className="items shadow">
                <h4>{val.name}</h4>
                <h1>
                  <span>₹</span>
                  {val.price}
                </h1>
                <p style={{ textAlign: "justify", padding: "0px 50px" }}>
                  {" "}
                  {val.desc}
                </p>
                <button className="outline-btn">GET STARTED</button>
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </>
  );
};

export default Hprice;
