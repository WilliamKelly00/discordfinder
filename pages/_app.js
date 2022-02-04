import Navbar from '../Components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
