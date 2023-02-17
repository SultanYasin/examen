import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import dumble from "../../assets/dumble.jpg";
import shape from "../../assets/shape.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="care about your health" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <main className={styles.main}>
        <section className="home">
          <div className="max-width">
            <div className="home-content">
              <h3>
                help for ideal <br /> body fitness
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                numquam, sequi assumenda nam, vel nihil repudiandae omnis
                eveniet est excepturi atque molestias at dolores fugit!
              </p>
              <button className="btn">Get started</button>
            </div>

            <Image
              src={shape}
              alt="Picture of the author"
              width={600}
              height={500}
            />
          </div>
        </section>
      </main>
    </>
  );
}
/*
  <div className={styles.description}></div>
<div className={styles.center}> </div>


       
*/
