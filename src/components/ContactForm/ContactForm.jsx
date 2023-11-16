import "./ContactForm.css";
import { TextField, Button } from "@mui/material/";

export default function ContactForm({ ...props }) {
  return (
    <form {...props} action="">
      <span id="requiredText">* Required</span>
      <h1 className="contactTitle">Contact Me</h1>
      <TextField id="nameInput" label="Name" fullWidth required />
      <TextField id="emailInput" label="Email" fullWidth required />
      <TextField
        id="messageInput"
        label="Message"
        fullWidth
        multiline
        required
        rows={4}
      />
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
}
