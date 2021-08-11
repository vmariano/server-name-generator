import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MealList from "../components/mealList";
import easyList from "../data/easy.json"
import complexList from "../data/complex.json"

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.days}>
              <h2></h2>
              <h2>Lunes</h2>
              <h2>Martes</h2>
              <h2>Miercoles</h2>
              <h2>Jueves</h2>
              <h2>Viernes</h2>
          </div>
          <MealList title="🥪Almuerzo" list={easyList} />
          <MealList title="🍲Cena" list={complexList} />
        </main>

        <footer className={styles.footer}>
          <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          </a>
        </footer>
      </div>
  )
}
