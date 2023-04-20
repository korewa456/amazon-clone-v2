import React from 'react'
import "./CreateAccount.css"
import { Link } from "react-router-dom";
import amazonLogo from "./amazon logo.png"
import bar from "./bar.png"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import informationIcon from "./information icon.png"

function CreateAccount() {
  return (
    <div className="createAccount">
        <Link to="/">
            <img className="amazonLogo" src={amazonLogo} alt="" />
        </Link>
        <div className="createAccount__container">
            <h1>Create account</h1>
            <label className="createAccount__label">Your name</label>
            <input type="name" maxlength="128" id="name" name="name" className="createAccount__input" placeholder="  First and last name"/>
            <label className="createAccount__label">Mobile number or email</label>
            <input type="email" maxlength="128" id="email" name="email" className="createAccount__input"/>
            <label className="createAccount__label">Password</label>
            <input type="password" maxlength="128" id="password" name="password" className="createAccount__input" placeholder="  At least 6 characters"/>
            <img className="informationIcon" src={informationIcon} alt="" /><span className="informationIcon">Passwords must be at least 6 characters.</span>
            <label className="createAccount__label">Re-enter Password</label>
            <input type="password" maxlength="128" id="password" name="password" className="createAccount__input" />
            <button className="createAccount__continueButton">Continue</button>
            <p>By creating an account, you agree to Amazon's <a className="aLink" href="/">Conditions of Use</a> and <a className="aLink" href="/">Privacy Notice</a>.</p>
            <img className="bar" src={bar} alt=""/>
            <div className="createAccount__container2">
                <span>Already have an account?  <a className="aLink" href="/login">Sign in <ArrowRightIcon className="arrowRightIcon" /></a></span><br />
                <span>Buying for work?  <a className="aLink" href="/">Create a free business account <ArrowRightIcon className="arrowRightIcon" /></a></span>
            </div>
        </div>
        <img className="bar" src={bar} alt=""/>
        <div className="createAccount__container3">
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

export default CreateAccount;
