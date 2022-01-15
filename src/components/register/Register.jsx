import { TextField, Button, InputAdornment } from "@mui/material";
import styles from "./Register.module.scss";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import classNames from "classnames";
import { useState } from "react";



export default function Register({onSubmit}) {
    
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [rePassword, setUserRePass] = useState('');

    // function fetchUserData(e) {
    //    e.preventDefault();
        // const data = {email, password};
   
        // if(password === rePassword && email !== "") {
        //  const data = {email,password};
        
    
    return(
    <div className={classNames(styles["register-form"])}>
        <form onSubmit={onSubmit}>
            <TextField  
                style={{marginBottom: "5%"}}
                placeholder="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setUserEmail(e.target.value)}
                className={classNames(styles["text-field"])}  
                InputProps={{startAdornment: <InputAdornment position="start">
                <EmailIcon sx={{color: "black"}}/>
                </InputAdornment>}} required />
            <TextField  className={classNames(styles["text-field"])}  
                style={{marginBottom: "5%"}}
                value={password}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Password"
                type="password"
                InputProps={{startAdornment: <InputAdornment position="start">
                <LockIcon sx={{color: "black"}}/>
                </InputAdornment>}} required/>
            <TextField  className={classNames(styles["text-field"])} 
                style={{marginBottom: "5%"}}
                value={rePassword}
                onChange={(e) => setUserRePass(e.target.value)}
                placeholder="Retype Password"
                type="password" 
                InputProps={{startAdornment: <InputAdornment position="start">
                <LockIcon sx={{color: "black"}}/>
                </InputAdornment>}} required/>
            <Button className={classNames(styles["register-button"])} 
                type="submit"
                style={{marginTop: "5%"}}
                variant={"contained"}>Register</Button>
        </form>
    </div>
            )
        }
        
   // function fetchData(e) {
    //     e.preventDefault();
    //        if(userDetails.password === userDetails.rePassword && userDetails.email !== ""){
    //         fetch('https://hem-api.herokuapp.com/register', {
    //                     method: "POST",
    //                     headers: {
    //                         'Content-type': 'application/json'
    //                     },
    //                     body: JSON.stringify(userDetails)
    //                 })
    //                 .then(res => res.json())
    //                 .catch((error) => {
    //                 throw new error(error);
    //             });
    //         }
    //     }
    

    // function handleChange(event) {
    //         const {name, value} = event.target;
    //         setUserDetails(prevText => {
    //             return {
    //                 ...prevText,
    //                 [name]: value
    //             }
    //         })
    //     }

 

    // useEffect(() => {
    //     if(formValid === true) {
    //         fetch('https://hem-api.herokuapp.com/register', {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(userDetails)
    //     })
    //     .then(res => res.json())
    //     .catch((error) => {
    //     throw new error(error);
    //     });
    // }
    // }, );


