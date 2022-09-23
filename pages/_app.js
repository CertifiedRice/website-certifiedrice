import '../styles/globals.css'
import Layout from '../components/Layout'
import { motion, AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      PageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opactiy: 1
      },
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  )
}

export default MyApp
