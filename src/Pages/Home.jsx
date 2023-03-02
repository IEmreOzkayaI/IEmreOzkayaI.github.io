import React from 'react'
import logo from "../Pages/logo.png"
import "../Pages/Home.scss"
export default function Home() {
  return (
    <div id='Home'>
    <div class="main-container">
        <div class="container">
            <nav>
                <ul>
                    <li><a href="#hıme.html">Home</a></li>
                    <li><a href="#about.html">About</a></li>
                    <li><a href="#contact.html">Contact</a></li>
                </ul>
                <div class="logo">
                    <img src={logo}alt=""></img>
                </div>

            </nav>
            <div class="section">
                <div class="detail">
                    <span>
                        Junior Full Stack Web Developer
                    </span>
                    <span>
                        JAVA - SPRING BOOT - POSTGRE SQL - REACT - HTML - CSS - SASS - BOOTSTRAP
                    </span>
                </div>
                <div class="name">Emre Ozkaya</div>
                <div class="contact">
                    <span><a href="https://www.linkedin.com/in/emre-ozkaya/">LinkedIn</a></span>
                    <span><a href="https://github.com/IEmreOzkayaI">GitHub</a></span>
                </div>
            </div>
        </div>
    </div>
    <div className="home-animation">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
    <div class="line4"></div>
    <div class="arrow-up"></div>
    <div class="arrow-down"></div>
    </div>
    </div>



  )
}
