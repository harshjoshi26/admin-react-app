import Grid from "@material-ui/core/Grid";
import MailList from "./mail-list.js";
import Button from "@material-ui/core/Button";
import InviteFormDialog from "./invite-form-dialog";
export default function InviteMail() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <InviteFormDialog />

      <MailList />
    </Grid>
  );
}
