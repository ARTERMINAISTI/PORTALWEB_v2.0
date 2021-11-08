import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Routes from '../routes'
import  ReactDOM  from 'react-dom'
function MyApp({ Component, pageProps }) {


  return <Component {...pageProps} />

  /*return <Routes/>*/
}

export default MyApp
