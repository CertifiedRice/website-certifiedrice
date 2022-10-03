import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" transition={{ duration: .7, type: 'easeInOut' }} style={{ position: 'relative' }} variants={{
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
        <h1 class="text-center text-6xl">CertifiedRice</h1>
        <hr></hr>

        <div>
          <h1 class="text-center text-4xl">About me!</h1>
          <p class="text-xl text-center">CertifiedRice is a passionate and freelance Web and Game Developer!</p>

          <div class="flex justify-center items-center">
            <img class="" src='https://i.gyazo.com/838f23d2420f8541afbd00e6a0943396.gif'></img>
          </div>

          <div class="flex space-x-2 justify-center">
            <a href="./about">
              <button type="button" class="mt-3 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More!</button>
            </a>
          </div>
        </div>

        <div id="bio">
          <h1 class="text-center text-4xl">Bio!</h1>

          <p class="text-xl text-center">I am Vietnamese!</p>
          <p class="text-xl text-center">A man of rice 🍚🥟🍣💻✈️</p>

          <p class='text-xl text-center'>I love Gaming, Coding, Playing the Flute, traveling, and listening to music!</p>
          <p class='text-xl text-center'>Interests: Web Development, Game Programming, and Music</p>

          <ul class="list-item">
            <li class="text-center">2020 - Self taught programming and game development</li>
            <li class="text-center">2022 - Started learning Web Development and game development with Unity</li>
          </ul>
        </div>

        <hr></hr>
      </motion.div>
    </div>
  )
}
