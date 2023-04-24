import React from "react"

const AdminDashboard = () =>{
    return(
        <>
            <div class = "admincontainer">
                <div class = "adminnavigation">
                    <ul>
                        <li>
                            <a href="#">
                                <span class = "adminicon"><ion-icon name="laptop-outline"></ion-icon></span>
                                <span class = "admintitle">MasterDsa</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class = "adminicon"><ion-icon name="home-outline"></ion-icon></span>
                                <span class = "admintitle">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class = "adminicon"><ion-icon name="people-outline"></ion-icon></span>
                                <span class = "admintitle">Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class = "adminicon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                                <span class = "admintitle">Message</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class = "adminicon"><ion-icon name="help-outline"></ion-icon></span>
                                <span class = "admintitle">Help</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class = "adminicon"><ion-icon name="settings-outline"></ion-icon></span>
                                <span class = "admintitle">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class = "adminicon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                <span class = "admintitle">Password</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class = "adminicon"><ion-icon name="log-out-outline"></ion-icon></span>
                                <div onclick = "window.location.href = '/admin';">
                                    <span href="/admin" class = "admintitle">Sign Out</span>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>


                <div class = 'main'>
                    <div class = 'topbar'>
                        <div class = 'toggle'>
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>

                        <div class = 'search'>
                            <label for="">
                                <input type="text" placeholder = "Search here"/>
                                <ion-icon name="search-outline"></ion-icon>
                            </label>
                        </div>

                        <div class = 'user'>
                            <img src="/image/creator/pranay1.jpg" alt="">
                        </div>

                    </div>

                    <div class = "cardBox">
                        <a href="/tcourses" style="text-decoration: none;">
                        <div class="card">
                            <div>
                                <div class="numbers">56</div>
                                <div class="cardName">Total Courses</div>
                            </div>
                        </div>
                        </a>
                        
                        <a href="/tsales" style="text-decoration: none;">
                        <div class="card">
                            <div>
                                <div class="numbers">170</div>
                                <div class="cardName">sales</div>
                            </div>
                            <div class = "iconBx">
                                <ion-icon name="cart-outline"></ion-icon>
                            </div>

                        </div>
                        </a>

                        <a href="/instructort" style="text-decoration: none;">
                        <div class="card">
                            <div>
                                <div class="numbers">19</div>
                                <div class="cardName">Total Instructors</div>
                            </div>
                            <div class = "iconBx">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                        </div>
                        </a>

                        <a href="/user" style="text-decoration: none;">
                        <div class="card">
                            <div >
                                <div class="numbers">395</div>
                                
                                <div class="cardName" >Total Users</div>
                            </div>
                            <div class = "iconBx">
                                <span class = "adminicon"><ion-icon name="people-outline"></ion-icon></span>
                            </div>

                        </div>
                        </a>

                    </div>

                    <div class = 'details'>
                        <div class="recentSales">
                            <div class = 'cardHeader'>
                                <h2>Recent Sales</h2>
                                <a href="#" class = 'btn'>View All</a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Price</td>
                                        <td>Payment</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>C programming</td>
                                        <td>2,399</td>
                                        <td>Paid</td>
                                        <td><span class = 'status refunded'>Refunded</span></td>
                                    </tr>

                                    <tr>
                                        <td>Data Structures and Algro</td>
                                        <td>2,399</td>
                                        <td>Paid</td>
                                        <td><span class = 'status registered'>Enrolled</span></td>
                                    </tr>

                                    <tr>
                                        <td>Python Programming</td>
                                        <td>2,399</td>
                                        <td>Paid</td>
                                        <td><span class = 'status cancelled'>Cancelled</span></td>
                                    </tr>

                                    <tr>
                                        <td>Java Tutorial</td>
                                        <td>2,399</td>
                                        <td>Paid</td>
                                        <td><span class = 'status registered'>Enrolled</span></td>
                                    </tr>

                                    <tr>
                                        <td>C++ Complete Guide</td>
                                        <td>2,399</td>
                                        <td>Paid</td>
                                        <td><span class = 'status registered'>Enrolled</span></td>
                                    </tr>

                                    <tr>
                                        <td>Full Stack Development</td>
                                        <td>2,399</td>
                                        <td>Paid</td>
                                        <td><span class = 'status refunded'>Refunded</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div class = "recentUsers">
                            <div class = 'cardHeader'>
                                <h2>New Users</h2>
                            </div>
                            <table>
                                <tr>
                                    <td width ='60px'> <div class = 'imgBx'><img src="/image/creator/student1.jpg" alt=""></div></td>
                                    <td><h4>Krishna Dey<br/><span>UK</span></h4></td>
                                </tr>
                                <tr>
                                    <td width ='60px'> <div class = 'imgBx'><img src="/image/creator/student2.jpg" alt=""></div></td>
                                    <td><h4>Priya<br/><span>India</span></h4></td>
                                </tr>
                                <tr>
                                    <td width ='60px'> <div class = 'imgBx'><img src="/image/creator/student3.jpg" alt=""></div></td>
                                    <td><h4>Bala Karthikeya<br/><span>India</span></h4></td>
                                </tr>
                                <tr>
                                    <td width ='60px'> <div class = 'imgBx'><img src="/image/creator/student4.jpg" alt=""></div></td>
                                    <td><h4>Rohith Boppey<br/><span>India</span></h4></td>
                                </tr>
                                <tr>
                                    <td width ='60px'> <div class = 'imgBx'><img src="/image/creator/pranay2.jpeg" alt=""></div></td>
                                    <td><h4>Ayush Singla<br/><span>Bangladesh</span></h4></td>
                                </tr>
                                <tr>
                                    <td width ='60px'><div class = 'imgBx'><img src="/image/creator/i9.jpg" alt=""></div></td>
                                    <td><h4>Amit Praseed<br/><span>Srilanka</span></h4></td>
                                </tr>
                                <tr>
                                    <td width ='60px'> <div class = 'imgBx'><img src="/image/creator/i7.jpg" alt=""></div></td>
                                    <td><h4>Dwane Pretorious<br/><span>US</span></h4></td>
                                </tr>
                                <tr>
                                    <td width ='60px'> <div class = 'imgBx'><img src="/image/creator/i5.jpg" alt=""></div></td>
                                    <td><h4>Bheemappa Halawar<br/><span>Canada</span></h4></td>
                                </tr>
                                
                            </table>

                        </div>

                    </div>
                    

                    
                </div>
            </div>
        </>
    )
}
