import {useState} from "react";
import "./ContactForm.css";
import { TextField, Button } from "@mui/material/";

export default function ContactForm({ ...props }) {

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    // Directly use formInput state for submission
    const formDataToSubmit = new URLSearchParams(formInput).toString();

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToSubmit,
    })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));

    // Reset formInput state
    setFormInput({
      name: "",
      email: "",
      message: "",
    });
}

  function handleInputChange({target: {name, value}}) {
    setFormInput({...formInput, [name]: value});
  }

  return (
    <form name="contact" method="POST" data-netlify="true" {...props}>
      <input type="hidden" name="form-name" value="contact" />
      <span id="requiredText">* Required</span>
      <h1 className="contactTitle">Contact Me</h1>
      <TextField id="nameInput" onChange={handleInputChange} label="Name" name="name" value={formInput.name} fullWidth required />
      <TextField id="emailInput" onChange={handleInputChange} label="Email" name="email" value={formInput.email} fullWidth required />
      <TextField
        id="messageInput"
        onChange={handleInputChange}
        name="message"
        value={formInput.message}
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
