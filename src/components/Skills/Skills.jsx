import React from 'react'
import classes from './Skills.module.css'
import PageHeader from '../PageHeader/PageHeader'

const backendSkills =
  <ul>
    <li>BACKEND</li>
    <li>Scala - Java - SQL</li>
    <li>AKKA - Spring Boot - Slick</li>
  </ul>

const frontendSkills = 
  <ul>
    <li>FRONTEND</li>
    <li>ReactJS - HTML - CSS - Redux</li>
  </ul>

const messagingSkills = 
  <ul>
    <li>FRONTEND</li>
    <li>ReactJS - HTML - CSS - Redux</li>
  </ul>

const dataScienceSkills = 
  <ul>
    <li>FRONTEND</li>
    <li>ReactJS - HTML - CSS - Redux</li>
  </ul>

const buildToolsSkills = 
  <ul>
    <li>FRONTEND</li>
    <li>ReactJS - HTML - CSS - Redux</li>
  </ul>

const otherSkills = 
  <ul>
    <li>FRONTEND</li>
    <li>ReactJS - HTML - CSS - Redux</li>
  </ul>

const totalSkills = [backendSkills, frontendSkills,    messagingSkills, dataScienceSkills, buildToolsSkills, otherSkills]

const Skills = () => {
  return (
    <div className={classes.Skills}>
        <PageHeader title={'What about the Skills?'} />
        <p>
        I'm a software developer based in the United States.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className={classes.Container}>
          {totalSkills.map(skills => {
              return (
                <div className={classes.List}>
                  {skills}
                </div>
              )
          })}
        </div>
    </div>
  )
}

export default Skills