import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/landing.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
     

     

      <main >
        <div className={styles.maxWidth}>
          <div className={styles.homeContent}>
            <h3 className={styles.h3} >help for ideal <br /> body fitness</h3>
            <p className={styles.p} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, numquam, sequi assumenda nam</p>
            <button className={styles.btn}>Get started</button>
          </div>
          <div className={styles.homeImage}>
            <Image src="/images/bg.jpg" alt="" layout="fill" />
          </div>
        </div>
      </main>
    </div>
  );
}
