import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import coverprior from "../../assets/extra/coverprior3.png"
import Header from "../common/header/Header"


const Pricing = () => {
  return (
    <>
      <Header/>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <div>
        <div style={{float: "right", padding:'20px 100px'}}>
        <Faq />
        </div>
      <div className="svg-image" >
        <img style={{marginLeft: '20px'}} src={coverprior} alt="" />
      </div>
      </div>
      
    </>
  )
}

export default Pricing
