import React from 'react'
import Back from "../common/back/Back";
import './CourseInfo.css'
import CourseInfo from './CourseInfo';
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from '../common/header/Header';
import { useLocation } from 'react-router-dom';

const CourseInfoMain = () => {
  const location = useLocation();
  console.log(location.state)
  return (
    <React.Fragment>
      <Header/>
      <Back title='Course Details'/>
      <CourseInfo />
    </React.Fragment>
  )
}

export default CourseInfoMain;