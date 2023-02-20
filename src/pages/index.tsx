import { PrimaryButton, SecondaryButton } from "@/components/CustomButton";
import { FullGridElement } from "@/components/CustomGrid";
import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
      <Grid container spacing={1} className= {styles.main} >
        <div className={styles.content} > 
        <h3 className={styles.h3}>
          help for ideal <br /> body fitness
        </h3>
        
        <button className={styles.btn}>Get started</button> 
        </div>
      </Grid>
    </>
  );
}


















/*  <FullGridElement>
          <PrimaryButton>Get started</PrimaryButton>
          <SecondaryButton>Login</SecondaryButton>
        </FullGridElement> */
