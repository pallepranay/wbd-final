import React from "react"
import './Success.css'
import Header from "../common/header/Header"

const Success = () => {
    return(
        <>
        <Header/>
            <div class="Successcontainer" style={{height: '100px'}}>
                <div class="Successrow">
                <div class="col-md-6 mx-auto mt-5">
                    <div class="Successpayment">
                        <div class="Successpayment_header">
                            <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
                        </div>
                        <div class="Successcontent">
                            <h1>Payment Success !</h1>
                            <p> Course Bought Successfully.... </p>
                            <p> Get Started with Course </p>
                            <a href="/">Go to Home</a>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Success;