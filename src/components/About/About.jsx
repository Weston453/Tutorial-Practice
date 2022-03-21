import React from 'react'
import classes from './About.module.css'
import PageHeader from '../PageHeader/PageHeader'
import Me from '../img/Me.JPG'

const About = () => {
  return (
    <div className={classes.AboutMe}>
      <PageHeader title={'About Me'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Hello! I'm Weston</h2>
          <p>
            I'm a software developer based in the United States.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={Me} alt="me"></img>

        </div>
      </div>
    </div>
  )
}

export default About