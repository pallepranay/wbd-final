import React from 'react'
import './checkout.css'



const Checkout = () => {
    return (
        <>
            <div class="roww">
                <div class="coll-75">
                    <div class="checkoutcontainer">

                        <form onsubmit="webFunction()" method="get" action="/success">

                            <div class="roww">
                                <div class="coll-50">
                                    <h3>Billing Address</h3>
                                    <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Pranay Reddy. Palle" required />
                                    <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder="pranayreddy.p20@iiits.in" required />
                                    <label for="adr"><i class="fa fa-address-card"></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="IIIT-Sricity, Chittor" required />
                                    <label for="city"><i class="fa fa-city"></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="Chennai" required />

                                    <div class="row">
                                        <div class="coll-50">
                                            <label for="state"><i class="fa fa-university"></i> State</label>
                                            <input type="text" id="state" name="state" placeholder="Andhra Pradesh" required />
                                        </div>
                                        <div class="coll-50">
                                            <label for="zip"><i class="fa fa-map-pin"></i> Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="500070" required />
                                        </div>
                                    </div>
                                </div> 


                                <div class="coll-50">
                                    <h3>Payment</h3>
                                    <label for="fname">Accepted Cards</label>
                                    <div class="icon-container">
                                        <i class="fab fa-cc-visa" style={{color:'navy'}}></i>
                                        <i class="fab fa-cc-amex" style={{color:'blue'}}></i>
                                        <i class="fab fa-cc-mastercard" style={{color:'red'}}></i>
                                        <i class="fab fa-cc-discover" style={{color:'orange'}}></i>
                                    </div>
                                    <label for="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="PALLE PRANAY REDDY" required />
                                    <label for="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="6547-3465-2514-9786" required />
                                    <label for="expmonth">Exp Month</label>
                                    <select name="mon">
                                        <optgroup label="Month" />
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>Aug</option>
                                        <option>Sep</option>
                                        <option>Oct</option>
                                        <option>Nov</option>
                                        <option>Dec</option>
                                    </select>
                                    <div class="row">
                                        <div class="coll-50">
                                            <label for="expyear">Exp Year</label>
                                            <select name="year">
                                                <optgroup label="Year" />
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                            </select>
                                        </div>
                                        <div class="coll-50">
                                            <label for="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" required />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address is same as billing
                            </label>
                            <input href="/success" type="submit" value="Continue to checkout" class="btnn" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout