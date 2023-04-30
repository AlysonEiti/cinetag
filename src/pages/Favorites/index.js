import React from 'react'
import styles from './Favorites.module.css'
import Banner from 'components/Banner'
import Title from 'components/Title'
import Card from 'components/Card'
import { useFavoriteContext } from 'context/Favorites'

export default function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <>
        <Banner image="favorites" />
        <Title>
            <h1>My favorites</h1>
        </Title>
        <section className={styles.container}>
            {
              favorite.map((fav) => {
                return <Card {...fav} key={fav.id} />
              })
            }
            {/* <Card id="1" title="Gato Bonifacio" cover="https://thecatapi.com/api/images/get?format=src&type=png" /> */}
        </section>
    </>
  )
}
