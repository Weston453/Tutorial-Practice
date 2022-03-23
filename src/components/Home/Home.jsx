import React from 'react'
import classes from './Home.module.css'
import Code from '../img/Code.svg'
import BinaryWorld from'../img/BinaryWorld.svg'

const Home = () => {
  return (
    <div className={classes.Home}  id="home">
        <div className={classes.Container}>
            <h1 className={classes.Hello}>Hello, World.</h1>
            <h1>Welcome to my website</h1>
        </div>
        <img className={classes.Code} src={Code} alt="code"></img>
        <img className={classes.BinaryWorld} src={BinaryWorld} alt="BinaryWorld"></img>
    </div>
  )
}

export default Home