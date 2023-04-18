import React from 'react'
import "./SignInButton.css"

function SignInButton() {
  return (
    <div className="signInButton">
      <a href="/login"><button className="signInButton__button" >Sign in</button></a>
      <p>New Customer?  <a className="aLink" href="/login">Start here.</a></p>
    </div>
  )
}

export default SignInButton;
