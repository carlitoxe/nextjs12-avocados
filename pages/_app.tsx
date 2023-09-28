import { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'
import Layout from 'components/Layout/Layout'
import CartProvider from '@store/Cart'

// export function reportWebVitals(metric) {
//   console.log(metric);
  
// }

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  </>
}

export default MyApp
