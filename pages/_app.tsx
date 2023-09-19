import { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'
import Layout from 'components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
