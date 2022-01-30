import Head from 'next/head'
import Image from 'next/image'
import ServerForm from '../Components/ServerForm'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='hero'>
        <h1>Hello world!</h1>
      </div>
    </div>
  )
}
