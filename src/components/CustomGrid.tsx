import { Grid } from "@mui/material";

export const FullGridElement = ({ children }) => (
    <Grid item xs={12} sm={12} md={12}>
      {children}
    </Grid>
  );