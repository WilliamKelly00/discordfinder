import Head from 'next/head'
import Image from 'next/image'
import ServerForm from '../Components/ServerForm'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import SearchForm from '../Components/SearchForm'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <main>
      <div className='home'>
        <div className='hero'>
          <Typography variant='h2' 
          sx={{ color: 'text.primary', fontSize: 60, fontWeight: '700' }}
          >Find Your Community!</Typography>
        </div>
        <SearchForm />
      </div>
    </main>
  )
}
