import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 class="text-center text-6xl">CertifiedRice</h1>
      <hr></hr>

      <div>
        <h1 class="text-center text-4xl">About me!</h1>
      <p>                <p class="text-xl text-center">CertifiedRice is a passionate and freelance Web and Game Developer!</p></p>

        <div class="flex space-x-2 justify-center">
        <a href="./about">
        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More!</button>
        </a>
      </div>
      </div>

      <div id="bio">
        {/* ToDo: Finish bio! */}
      <h1 class="text-center text-4xl">Bio!</h1>
      <p class="text-xl text-center">I am Vietnamese!</p>
      <p class="text-xl text-center">A man of rice 🍚🥟🍣💻✈️</p>
      <p class="text-xl text-center">More coming soon!</p>
      </div>

      <hr></hr>
    </div>
  )
}
