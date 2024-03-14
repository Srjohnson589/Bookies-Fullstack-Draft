import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Signup.css';
import { useState, FormEvent } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "/src/views/firebase";

interface IProps {
    open: boolean,
    handleClose: () => boolean
}

function SignUp({open, handleClose}:IProps) {
    // UserSignUp
    const [newuser, setNewuser] = useState({
      username: "",
      email: "",
      password: ""
    })

    const handleSubmit = () => {
      createUserWithEmailAndPassword(auth, newuser.email, newuser.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          alert('Sign up was successful')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
    };

    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4
    }

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="signupform">
            <h2>Sign Up</h2>
            <TextField
            id="outlined-helperText"
            label="Username"
            onChange={(event) => setNewuser({...newuser, username: event.target.value})}
               />
            <br></br>
            <TextField
            id="outlined-helperText"
            label="Email"
            onChange={(event) => setNewuser({...newuser, email: event.target.value})}
               />
            <br></br>
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(event) => setNewuser({...newuser, password: event.target.value})}
            />
            <Button onClick={() => {handleSubmit(); handleClose()}} variant="contained">Sign Up</Button>
        </Box>
      </Modal>
  );
}

export default SignUp