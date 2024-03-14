import './Home.css'
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SignUp from '/src/components/Signup/Signup.tsx'
import Login from '/src/components/Login/Login.tsx'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

const Home = () => {
    // Auth Listener
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        return uid;
    } else {
        // User is signed out
        return null;
    });

    const color = blue[500];

    // Open Modals
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openL, setOpenL] = useState(false);
    const handleOpenL = () => setOpenL(true);
    const handleCloseL = () => setOpenL(false);
    
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("You are now signed out")
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }    
};

  return (
    <> 
    
    <div className="myhomediv">
        <img className="bookies-logo" src="/src/assets/images/Bookieslogo.png" alt="" />
        <div className="signupbuttons">
            <Stack direction="row" spacing={2}>
                {checkUser() ? 
                    <Button onClick={logout} variant="contained">Log Out
                    </Button> 
                    :
                    <> 
                    <Button onClick={handleOpen} variant="contained">Sign Up
                    </Button>
                    <SignUp open={open} handleClose={handleClose}/>
                    <Button onClick={handleOpenL} variant="contained" color="success">
                        Login
                    </Button>
                    <Login openL={openL} handleOpenL={handleOpenL} handleCloseL={handleCloseL}/>
                    </>
                }
            </Stack>
        </div>
    </div>
    
    </>
  )
}
export default Home