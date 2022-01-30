import Head from 'next/head'
import Image from 'next/image'
import ServerForm from '../Components/ServerForm'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import SearchForm from '../Components/SearchForm'

export default function Home() {
  return (
    <main>
      <div className='hero'>
        <h1>Find your community!</h1>
      </div>
      <SearchForm />
    </main>
  )
}
