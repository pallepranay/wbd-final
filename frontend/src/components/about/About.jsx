import React from "react"
import "./about.css"
import Header from "../common/header/Header"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import AboutUs from "./AboutCont"

const About = () => {
  return (
    <>
    <Header />
      <Back title='About Us' />
      <AboutUs />
      <AboutCard />
    </>
  )
}

export default About;
