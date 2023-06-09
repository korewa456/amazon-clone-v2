import React, {useState} from 'react'
import "./PasswordPage.css"
import { Link } from "react-router-dom";
import amazonLogo from "./amazon logo.png"
import bar from "./bar.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function PasswordPage({handleLoginClick}) {
    const [enterPassword, setEnterPassword] = useState("");

    let linkto3 = "/password";
    {
        enterPassword === "1234" ?
        linkto3 = "/" : 
        linkto3 = "/password"
    }

    let signInButton = (
        <Link to={linkto3}>
        <button className="passwordPage__signInButton" onClick={handleLoginClick}>Sign in</button>
        </Link>
    )

    const passwordChange = event => {
        setEnterPassword(event.target.value)
    }

  return (
    <div className="passwordPage">
        <Link to="/">
            <img className="amazonLogo" src={amazonLogo} alt="" />
        </Link>
        <div className="passwordPage__container">
            <h1>Sign in</h1>
            <span className="loginEmail">brian@gmail.com  </span><a className="aLink change" href="/login">Change</a>
            <label className="passwordPage__label">Password</label>
            <a href="/" className="forgotPassword aLink"><span>Forgot your password?</span></a>
            <input type="Password" maxlength="128" id="Password" name="Password" className="passwordPage__input" value={enterPassword} onChange={passwordChange} />
            {signInButton}
            <input type="checkbox" /><span className="keepMe">  Keep me signed in. <a className="aLink" href="/">Details</a></span><ArrowDropDownIcon className="arrowDropDownIcon" />
        </div>
        <img className="bar" src={bar} alt=""/>
        <div className="passwordPage__container2">
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

export default PasswordPage;
