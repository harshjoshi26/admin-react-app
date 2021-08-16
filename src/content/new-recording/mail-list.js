import Grid from "@material-ui/core/Grid";

export default function MailList() {
  const emails = [
    "krystal@libsyn.com",
    "rob@libsyn.com",
    "sean@libsyn.com",
    "lee@libsyn.com"
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="mail-list"
      style={{ marginTop: "20px" }}
    >
      {emails.map((email) => (
        <Grid
          style={{ margin: "5px" }}
          container
          direction="row"
          justifyContent="space-between"
        >
          {" "}
          {email}
          <span> view </span>{" "}
        </Grid>
      ))}
    </Grid>
  );
}
