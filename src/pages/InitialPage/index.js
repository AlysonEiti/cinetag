import styles from './InitialPage.module.css';
import Banner from 'components/Banner'
import Card from 'components/Card'
import Title from 'components/Title'
import { useEffect, useState } from 'react';

export default function InitialPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/alysoneiti/cinetag-api/videos')
      .then(response => response.json())
      .then(video => {
        setVideos(video)
      })
  }, [])
  
  return (
    <>      
      <Banner image="home" />
      <Title>
        <h1>A place to store your videos and movies!</h1>
      </Title>
      <section className={styles.container} >
        {
          videos.map((video) => {
            return <Card {...video} key={video.id} />
          })
        }
      </section>      
    </>
  )
}
