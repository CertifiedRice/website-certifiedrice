import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .20,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .25
          }
        }
      }}>
        <motion.div whileHover={{
          position: 'realtive',
          zIndex: 1,
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10, 0],
          transition: {
            duration: .2
          }
        }}>
          <h1 class="text-center text-6xl">CertifiedRice</h1>
        </motion.div>
        <hr></hr>

        <div>
          <h1 class="text-center text-4xl">About me!</h1>
          <p class="text-xl text-center">CertifiedRice is a passionate and freelance Web and Game Developer!</p>

          <div class="flex justify-center items-center">
            <img class="" src='https://i.gyazo.com/838f23d2420f8541afbd00e6a0943396.gif'></img>
          </div>

          <div class="flex space-x-2 justify-center">
            <a href="./about">
              <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More!</button>
            </a>
          </div>
        </div>

        <div id="bio">
          {/* ToDo: Finish bio! */}
          <motion.div whileHover={{
            position: 'realtive',
            zIndex: 1,
            scale: [1, 1.4, 1.2],
            rotate: [0, 10, -10, 0],
            transition: {
              duration: .2
            }
          }}>
            <h1 class="text-center text-4xl">Bio!</h1>
          </motion.div>

          <p class="text-xl text-center">I am Vietnamese!</p>
          <p class="text-xl text-center">A man of rice 🍚🥟🍣💻✈️</p>

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
