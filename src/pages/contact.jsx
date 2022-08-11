import React from "react";
import { Grid, Paper, TextField, Typography } from "@mui/material";

export default function Contact() {
     return (
          <Paper className="paper_contact">
               <Grid container padding={2} spacing={2}>
                    <Grid item md={12} sm={12}>
                         <Typography align="center" variant="h4">
                              Contact
                         </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                         <TextField label={"Adresse email"} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                         <TextField label={"Objet du message"} fullWidth />
                    </Grid>
                    <Grid item md={12} xs={12}>
                         <TextField
                              multiline
                              label={"Conténu du message"}
                              rows={7}
                              fullWidth
                         />
                    </Grid>
               </Grid>
          </Paper>
     );
}
