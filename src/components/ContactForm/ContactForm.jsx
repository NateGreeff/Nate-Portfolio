// import {useState} from "react";
import "./ContactForm.css";
import { TextField, Button } from "@mui/material/";

export default function ContactForm({ ...props }) {

//   const [formInput, setFormInput] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   function handleSubmit(e) {
//     e.preventDefault();
//     // Directly use formInput state for submission
//     const formDataToSubmit = new URLSearchParams(formInput).toString();

//     fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: formDataToSubmit,
//     })
//     .then(() => console.log("Form successfully submitted"))
//     .catch((error) => alert(error));

//     // Reset formInput state
//     setFormInput({
//       name: "",
//       email: "",
//       message: "",
//     });
// }

  // function handleInputChange({target: {name, value}}) {
  //   setFormInput({...formInput, [name]: value});
  // }

  return (
    <form name="contact" method="POST" data-netlify="true" {...props}>
      <input type="hidden" name="form-name" value="contact" />
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
      <Button type="submit" variant="outlined" >
        Submit
      </Button>
    </form>
  );
}
