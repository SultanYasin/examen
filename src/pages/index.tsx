import { PrimaryButton, SecondaryButton } from "@/components/CustomButton";
import { FullGridElement } from "@/components/CustomGrid";
import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
      <Grid className={styles.main} container spacing={1}>
        <Grid item>
          <Typography className={styles.description}>
            Help for ideal body fitness
          </Typography>
        </Grid>

        <FullGridElement>
          <PrimaryButton>Get started</PrimaryButton>
          <SecondaryButton>Login</SecondaryButton>
        </FullGridElement>
      </Grid>
    </>
  );
}
