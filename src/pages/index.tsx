import styles from "@/styles/Home.module.css";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
      <Grid className={styles.main} container>
        <Grid item  className={styles.description}  >
          <h3>help for ideal <br /> body fitness</h3>

          <button className="btn">Get started</button>
        </Grid>
      </Grid>
    </>
  );
}
