import './Home.css'
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import SignUp from '/src/components/home/Signup/Signup.tsx'
import Login from '/src/components/home/Login/Login.tsx'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

const Home = () => {

    const color = blue[500];

    // Open Modals
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openL, setOpenL] = useState(false);
    const handleOpenL = () => setOpenL(true);
    const handleCloseL = () => setOpenL(false);
    
    const [user, setUser] = useState({
        email: '',
        uid: ''
    })

    useEffect(() => {
        getCurrentUser(), [user.email]
    })

    const getCurrentUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (typeof user.email === 'string')
                setUser({
                    email: user.email,
                    uid: user.uid
                })
            }
        })
    }

    // const logoutUser = () => {
    //     signOut(auth).then(()=> {
    //         alert('Signed Out')
    //     }).catch((error)=>{
    //         alert(`Error: ${error}`)
    //     })
    // }

    return (
    <> 
    
    <div className="myhomediv">
        <img className="bookies-logo" src="/src/assets/images/Bookieslogo.png" alt="" />
        <div className="signupbuttons">
            <Stack direction="row" spacing={2}>
               <Button variant="contained">Log Out
                </Button> 
                <Button onClick={handleOpen} variant="contained">Sign Up
                </Button>
                <SignUp open={open} handleClose={handleClose}/>
                <Button onClick={handleOpenL} variant="contained" color="success">
                    Login
                </Button>
                <Login openL={openL} handleCloseL={handleCloseL}/>
            </Stack>
        </div>
    </div>
    
    </>
  )
}
export default Home