import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Header from "../common/header/Header"


const Team = () => {
  return (
    <>
      <Header/>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <div style={{paddingTop:'100px', paddingBottom:'100px'}}>
        <Awrapper />
      </div>
      
    </>
  )
}

export default Team
