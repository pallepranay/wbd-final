import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Header from "../common/header/Header"

const CourseHome = () => {
  return (
    <>
      <Header />
      <Back title='Begin Coding' />
      <CoursesCard />
      <OnlineCourses />
    </>
    
  )
}

export default CourseHome
