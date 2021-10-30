import Head from 'next/head'
import { Toolbar } from '../componenets/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className='page-container'>
         
      <Toolbar />
       
          <div className={styles.main}>
               <h3>Your one step shop for the latest news articles</h3>
          </div>
      </div>
    )
}
