import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Player.module.css'
import Banner from 'components/Banner'
import Title from 'components/Title'
import NotFound from 'pages/NotFound'

export default function Player() {
  const [video, setVideos] = useState();
  const parameter = useParams();
  
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/alysoneiti/cinetag-api/videos?id=${parameter.id}`)
      .then(response => response.json())
      .then((video) => {
        setVideos(...video)
      })
  }, [])

  if(!video){
    return <NotFound />
  }
  
  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>            
        </iframe>
      </section>
    </>
  )
}
