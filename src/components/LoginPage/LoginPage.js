import React from 'react'
import "./LoginPage.css"
import { Link } from "react-router-dom";
import amazonLogo from "./amazon logo.png"
import bar from "./bar.png"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function LoginPage() {
  return (
    <div className="loginPage">
        <Link to="/">
            <img className="amazonLogo" src={amazonLogo} alt="" />
        </Link>
        <div className="loginPage__container">
            <h1>Sign in</h1>
            <label className="loginPage__label">Email or mobile phone number</label>
            <input type="email" maxlength="128" id="email" name="email" className="loginPage__input" />
            <button className="loginPage__continueButton">Continue</button>
            <p>By continuing, you agree to Amazon's <a className="aLink" href="/">Conditions of Use</a> and <a className="aLink" href="/">Privacy Notice</a>.</p>
            <div className="needHelp">
                <span className="needHelp"><ArrowRightIcon className="arrowRightIcon" /><a className="aLink" href="/">Need help?</a></span>
            </div>
        </div>
        <div className="loginPage__container2">
            <h5>New to Amazon?</h5>
            <a href="/register"><button className="loginPage__createNewAccountButton">Create your Amazon account</button></a>
        </div>
        <img className="bar" src={bar} alt=""/>
        <div className="loginPage__container3">
            <span><a className="aLink" href="/">Conditions of Use</a></span>
            <span><a className="aLink" href="/">Privacy Notice</a></span>
            <span><a className="aLink" href="/">Help</a></span>
        </div>
        <div className="trademark">
            <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
        </div>
        
    </div>
  )
}

export default LoginPage;
