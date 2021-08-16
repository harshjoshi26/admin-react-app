import React from "react";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import InviteForm from "./invite-form";
import InviteMail from "./invite-mail";
import Button from "@material-ui/core/Button";
//import NewRecording from './new-recording'
import Container from "@material-ui/core/Container";
export default function NewRecording() {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Paper
        style={{
          textAlign: "left",

          marginBottom: "1px",
          padding: "10px",
          fontWeight: "bold",
          fontSize: "15px"
        }}
        elevation={1}
      >
        Setup Recording
      </Paper>
      <Paper
        style={{
          minHeight: "500px",
          backgroundColor: "#f8f8f8",
          flexWrap: "wrap"
        }}
        outlined="square"
      >
        <Grid container style={{ paddingTop: "50px" }}>
          <Grid container direction="row" justifyContent="center" xs={8}>
            <InviteForm />
          </Grid>
          <Grid xs={3}>
            <InviteMail />
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={1} style={{ marginTop: "1px" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          style={{ padding: "10px" }}
        >
          <Button color="secondary"> Delete </Button>
          <Grid>
            <Button
              style={{ height: "100%", marginRight: "5px" }}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              style={{
                background: "#6BA342",

                color: "white",
                marginRight: "10px"
              }}
              variant="contained"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
