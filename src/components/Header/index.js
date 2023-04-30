import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import HeaderLink from 'components/HeaderLink';

export default function Header() {
  return (
    <header className={styles.header}>
        <Link to="./">
            <img src={logo} alt="Cinetag logo"></img>
        </Link>
        <nav>
            <HeaderLink url="./">Home</HeaderLink>
            <HeaderLink url="./Favorites">Favorites</HeaderLink>
        </nav>
    </header>
  )
}
