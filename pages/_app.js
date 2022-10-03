import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps, router }) {
  return (
      console.log("%c CertifiedRice was here!", "color: cyan; font-weight: bold;"),
        <Layout>
          <Component {...pageProps} />
        </Layout>
  )
}

export default MyApp
