// import {useState, useEffect} from "react";
import "./ContactForm.css";
import { TextField, Button } from "@mui/material/";

export default function ContactForm({ ...props }) {

  // const [formInput, setFormInput] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [formData, setFormData] = useState({});

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setFormData(formInput);
  //   setFormInput({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // }

  // function handleInputChange({target: {name, value}}) {
  //   setFormInput({...formInput, [name]: value});
  // }

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <form name="contact" data-netlify="true" {...props} action="">
      <span id="requiredText">* Required</span>
      <h1 className="contactTitle">Contact Me</h1>
      <TextField id="nameInput" label="Name" name="name" fullWidth required />
      <TextField id="emailInput" label="Email" name="email" fullWidth required />
      <TextField
        id="messageInput"
        name="message"
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
