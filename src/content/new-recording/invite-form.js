import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import "./invite-form.css";
export default function InviteForm() {
  const [checked, setchecked] = useState(false);
  const handleChange = () => {
    setchecked(!checked);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <tr>
          <td>Call Title </td>
          <td>
            <input className="invite-form-input" type="text" />
          </td>
        </tr>
        <tr>
          <td>Guests </td>
          <td>
            <input className="invite-form-input" type="text" />
          </td>
        </tr>
        <tr>
          <td>Agenda </td>
          <td>
            <textarea className="invite-form-textarea"></textarea>
          </td>
        </tr>
        <tr>
          <td>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              style={{ margin: "10px" }}
            />
          </td>
          <td>Create mixdown track</td>
        </tr>
      </table>
    </div>
  );
}
