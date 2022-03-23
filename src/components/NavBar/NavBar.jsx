import classes from './NavBar.module.css'
import React from 'react'

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
        <nav>
            <ul>
                <li>
                    <a href="/#home">Home</a>
                </li>
                <li>
                    <a href="/#about">About Me</a>
                </li>
                <li>
                    <a href="/#skills">Skills</a>
                </li>
                <li>
                    <a href="/#projects">Projects</a>
                </li>
                <li>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar