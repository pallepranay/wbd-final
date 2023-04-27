import React from 'react';
import course1 from '../../assets/courses/course1.jpg';
// import axios from 'axios';
import i1 from "../../assets/creator/i1.jpg";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courseInstructorCard } from "../../dummydata";



const CourseInfo = (props) => {
    const [data,setData]=useState();
    const [no, setNo] = useState(1);
    const {id} = useParams();
    useEffect(() =>{
        const fetchData = async () =>{
            setNo(id)
            console.log(id)
            const res = await fetch(`http://localhost:5000/courses`);
            const json = await res.json();
            console.log(json);
            setData(json);
        }
        fetchData();
    }, []);



    return (
        <React.Fragment>
            <div>
                {data &&   <section id='course_inner'>
                    <div className="overview">
                        <div className="toptext">
                            <h2>{data[no].coursesName}</h2>
                            <br />
                            <h4>{data[no].desc}</h4>
                            <br />
                            <div className="seller">Bestseller</div>
                            <span>
                                <div className="course-box">
                                    <div className="courses">
                                        <div className="details">
                                            <span>{data[no].lastUpdated} | </span>
                                            <span>Created by: {data[no].instrName}</span>
                                            <div className="star">
                                                <span>{data[no].rating}</span>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
    
                                                <span className="link"><a href='#'>{data[no].totalUsers} ratings</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>


                        <br />
                        <div className="course-head">
                            <div className="c-name">
                                <h2>{data[no-1].desCap}</h2>
                                <p>{data[no-1].desc}</p>
                            </div>
                            <span>{data[no-1].discountPrice}</span>
                        </div>
                        <br />
                        <div className="tutor">
                            <img src={data[no-1].instImage} alt="" />
                            <div className="tutor-details">
                                <h5>Instructor : {data[no-1].instrName}</h5>
                                <p>{data[no-1].workingAt}</p>
                                <hr />
                                <h3>What you'll learn</h3>
                                <div className="learn">
                                    <p> <i className="far fa-check-circle"></i> Learn various Popular Data Structures and their Algorithms. </p>
                                    <p> <i className="far fa-check-circle"></i> Develop your Analytical skills on Data Structure and use then
                                        efficiently. </p>
                                    <p> <i className="far fa-check-circle"></i> Learn Recursive Algorithms on Data Structures</p>
                                    <p> <i className="far fa-check-circle"></i> Learn about various Sorting Algorithms</p>
                                    <p><i className="far fa-check-circle"></i> Implementation of Data Structures using C and C++</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="enroll">
                        <div className="ccardbox2">
                            <div className="dcard2"><span className="tag"></span>
                                <div className="fpart2">
                                    <img src={data[no-1].cover} />
                                    <iframe src={data[no-1].courseLink} frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <br /><br />

                        <h4>The Course includes </h4>
                        <p> <i className="fas fa-video"></i>46 hours video </p>
                        <p> <i className="far fa-newspaper"></i>81 articles </p>
                        <p> <i className="fa fa-cloud-download"></i>Downloadable resources</p>
                        <p> <i className="fas fa-infinity"></i>Full lifetime access</p>
                        <p> <i className="fas fa-mobile-alt"></i>Access on mobile Tv</p>
                        <p> <i className="fas fa-paperclip"></i>Lab Assignments</p>
                        <p> <i className="fas fa-trophy"></i>Certificate of Completion </p>
                        <div className="enroll-btn">
                            <a className="blue">Enroll Course</a>
                        </div>
                    </div>
                </section>}
              
            </div>
            <br /><br /><br /><br />
        </React.Fragment >
    )
};

export default CourseInfo;