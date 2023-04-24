import React from 'react'
import "./LogoutButton.css"

function LogoutButton() {
  return (
    <div className="logoutButton">
        <a href="/login"><button className="logoutButton__button" >Logout</button></a>
    </div>
  )
}

export default LogoutButton;
