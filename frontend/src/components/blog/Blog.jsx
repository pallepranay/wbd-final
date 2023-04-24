import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import Header from "../common/header/Header"

const Blog = () => {
  return (
    <>
    <Header/>
      <Back title='DSA Interview Experience' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
