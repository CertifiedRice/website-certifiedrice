import '../styles/globals.css'
import Layout from '../components/Layout'
import { motion, AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter
      initial={true}
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 })
        }
      }}>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" transition={{duration: .7, type: 'easeInOut'}} style={{position: 'relative'}} variants={{
          pageInitial: {
              opacity: 0,
          },
          pageAnimate: {
              opacity: [0, 1],
              scale: [1, 1.03, 1]
          },
          pageExit: {
              backgroundColor: 'white',
              filter: `invert()`,
              opacity: 0,
          }
      }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
