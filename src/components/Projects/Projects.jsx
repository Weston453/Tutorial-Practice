import React from 'react'
import classes from './Projects.module.css'
import PageHeader from '../PageHeader/PageHeader'
import SpendTrackerThumbnail from '../img/SpendTrackerThumbnail.jpg'
import Background from '../img/Background.jpg'
// import PlayBtn from '../img/PlayBtnSvg.svg'

const playBtnSvg = (url) => {
  return (
    <div className={classes.PlayButton}              onClick ={(e) => window.open(url, "blank").focus}
    >
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 1920 1250" version="1.1" viewBox="0 0 1920 1250">
<g fill="#594A42">
	<path d="m1227.8 605.5l-447.59-258.42c-18.576-10.725-33.775-1.95-33.775 19.5v516.83c0 21.45 15.199 30.225 33.775 19.5l447.59-258.42c18.576-10.725 18.576-28.275 0-39z"/>
	<path d="m1542.1 384.71c-31.093-73.512-75.6-139.53-132.28-196.21-56.684-56.685-122.7-101.19-196.21-132.28-76.12-32.197-156.97-48.521-240.29-48.521s-164.17 16.325-240.29 48.522c-73.512 31.093-139.53 75.599-196.21 132.28-56.685 56.684-101.19 122.7-132.28 196.21-32.196 76.12-48.521 156.97-48.521 240.29s16.325 164.17 48.521 240.29c31.093 73.512 75.599 139.53 132.28 196.21 56.684 56.685 122.7 101.19 196.21 132.28 76.121 32.196 156.97 48.521 240.29 48.521s164.17-16.325 240.29-48.521c73.512-31.093 139.53-75.6 196.21-132.28 56.685-56.684 101.19-122.7 132.28-196.21 32.196-76.12 48.521-156.97 48.521-240.29s-16.325-164.17-48.521-240.29zm-568.79 807.6c-312.81 0-567.31-254.49-567.31-567.31s254.49-567.31 567.31-567.31 567.31 254.49 567.31 567.31-254.49 567.31-567.31 567.31z"/>
</g>
</svg>
      {/* {PlayBtn} */}
    </div>
  )
}

const youtubeVideo = (url, thumbnail, description) => {
  return(
    <div className={classes.VideoContainer}>
      <div className={classes.Thumbnail}>
        {playBtnSvg(url)}
        <img src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className={classes.Text}>
        <p>{ description }</p>
      </div>
    </div>
  )
}

const spendTrackerVideoDescription = "Spend Tracker I'm a software developer based in the United States.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <img className={classes.Background} src={Background} alt="Background"></img>
      <PageHeader title={"I have also created other cool projects"} />
      <div className={classes.ProjectsContent}>
        <div className={classes.Paragraph}>
          <p>
          I'm a software developer based in the United States. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className={classes.Videos}>
          {youtubeVideo("https://youtu.be/eWveuxapa7w", SpendTrackerThumbnail, spendTrackerVideoDescription)}
          {youtubeVideo("https://youtu.be/eWveuxapa7w", SpendTrackerThumbnail, spendTrackerVideoDescription)}
          {youtubeVideo("https://youtu.be/eWveuxapa7w", SpendTrackerThumbnail, spendTrackerVideoDescription)}
        </div>
      </div>
    </div>
  )
}

export default Projects