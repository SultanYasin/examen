
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import Grid from "@mui/material/Grid";
import shape from "../../assets/shape.jpg";


export default function Home() {
  return (
    <>
      <Grid className={styles.main}  container>
        <Grid item>
          <h3>
            help for ideal <br /> body fitness
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,</p>
          <button className="btn">Get started</button>
        </Grid>
        <Grid item>
          
        </Grid>
      </Grid>
    </>
  );
}
/*

<Image
            src={shape}
            alt="Picture of the author"
            width={600}
            height={500}
          />
  <div className={styles.description}></div>
<div className={styles.center}> </div>


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
       
*/
