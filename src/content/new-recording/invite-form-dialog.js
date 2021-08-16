import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth={true}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "650px" }}
      >
        <table className="invite-mail-form">
          <tr>
            <td className="invite-mail-form-label">Email </td>
            <td>
              {" "}
              <input
                type="text"
                placeholder="seperate multiple with a comma"
              />{" "}
            </td>
          </tr>
          <tr>
            <td className="invite-mail-form-label">Your Name </td>
            <td>
              {" "}
              <input type="text" />{" "}
            </td>
          </tr>
          <tr>
            <td className="invite-mail-form-label">Your Podcast </td>
            <td>
              {" "}
              <input type="text" />{" "}
            </td>
          </tr>
          <tr>
            <td className="invite-mail-form-label">Call Tone </td>
            <td>
              {" "}
              <select>
                {" "}
                <option>Chatty </option>{" "}
              </select>{" "}
            </td>
          </tr>
          <tr>
            <td className="invite-mail-form-label">Your Website </td>
            <td>
              {" "}
              <input type="url" />{" "}
            </td>
          </tr>
          <tr>
            <td style={{ display: "flex" }} className="invite-mail-form-label">
              Prep Questions{" "}
            </td>
            <td>
              {" "}
              <textarea rows="5"> </textarea>{" "}
            </td>
          </tr>
        </table>
      </Grid>
    </Dialog>
  );
}

export default function InviteFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          background: "black",
          height: "30px",
          color: "white"
        }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Send Invite mail
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
