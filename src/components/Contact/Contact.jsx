import React from 'react'
import { FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from './Contact.module.css'

const handleURL = (url) => {
  return event => window.open(url, "_blank")
}

const Contact = () => {
  return (
    <div className={classes.Contact}  id="contact">
      <div className={classes.ContactIcons}>
        <FaYoutube color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://studio.youtube.com/channel/UCC4gALMO9K7GKjaUHI-MQ4g/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D')} 
        />
        <FaInstagramSquare color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://studio.youtube.com/channel/UCC4gALMO9K7GKjaUHI-MQ4g/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D')} 
        />
        <FaGithub color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://studio.youtube.com/channel/UCC4gALMO9K7GKjaUHI-MQ4g/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D')} 
        />
        <FaLinkedin color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://studio.youtube.com/channel/UCC4gALMO9K7GKjaUHI-MQ4g/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D')} 
        />
      </div>
    </div>
  )
}

export default Contact