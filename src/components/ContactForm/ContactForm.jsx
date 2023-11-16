import {useState, useEffect} from "react";
import "./ContactForm.css";
import { TextField, Button } from "@mui/material/";

export default function ContactForm({ ...props }) {

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formData, setFormData] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    setFormData(formInput);
    setFormInput({
      name: "",
      email: "",
      message: "",
    });
  }

  function handleInputChange({target: {name, value}}) {
    setFormInput({...formInput, [name]: value});
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form netlify {...props} action="">
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
      <Button type="submit" variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}
