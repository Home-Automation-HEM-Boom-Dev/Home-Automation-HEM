import { TextField, Button, InputAdornment } from "@mui/material";
import styles from "./Register.module.scss";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import classNames from "classnames";
// import { useEffect, useState } from "react";



export default function Register() {


    return(
        <div className={classNames(styles["register-form"])}>
            <TextField  
            style={{marginBottom: "5%"}}
            placeholder="Email"
            type="email"
            className={classNames(styles["text-field"])}  
            InputProps={{startAdornment: <InputAdornment position="start">
            <EmailIcon sx={{color: "black"}}/>
            </InputAdornment>}} />
            <TextField  className={classNames(styles["text-field"])}  
            style={{marginBottom: "5%"}}
            placeholder="Password"
            type="password"
            InputProps={{startAdornment: <InputAdornment position="start">
            <LockIcon sx={{color: "black"}}/>
            </InputAdornment>}} />
            <TextField  className={classNames(styles["text-field"])} 
            style={{marginBottom: "5%"}}
             placeholder="Retype Password"
             type="password" 
            InputProps={{startAdornment: <InputAdornment position="start">
            <LockIcon sx={{color: "black"}}/>
            </InputAdornment>}} />
            <Button className={classNames(styles["register-button"])} 
            style={{marginTop: "5%"}}
            variant={"contained"}>Register</Button>
        </div>
            )
        }
        
    // let formValid = false;
    // const [userDetails, setUserDetails] = useState({
    //     email: "",
    //     password: "",
    //     rePassword: ""
    // });

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
    //     .catch((error) => 
    //     console.log(`${error} /n Something went wrong!`)
    //     );
    //     }
    // }, [userDetails]);

    // function handleClick(event) {
    //     event.preventDefault();
    //     if(userDetails.password === userDetails.rePassword && userDetails.email !== '') {
    //         formValid = true;
    //     }
    // }

    // function handleChange(event) {
    //     const {name, value} = event.target;
    //     setUserDetails(prevText => {
    //         return {
    //             ...prevText,
    //             [name]: value
    //         }
    //     })
    // }

    //    <div className={classNames(styles["register-form"])}>
    //        <TextField
    //            type="email"
    //            placeholder="Email"
    //            className={classNames(styles["textfield"])}
    //            InputProps={{startAdornment: <InputAdornment position="start"><EmailIcon sx={{color: "black"}}/></InputAdornment>}} 
    //            style={{ "width": "90%", "marginBottom": "4%", "marginTop": "5%"}}
    //        />
    //        <TextField
    //            type="password"
    //            placeholder="Password"
    //            className={classNames(styles["textfield"])} 
    //            InputProps={{startAdornment: <InputAdornment position="start"><LockIcon sx={{color: "black"}}/></InputAdornment>}} 
    //            style={{ "width": "90%", "marginBottom": "4%"}} 
    //        />
    //        <TextField 
    //            type="password"
    //            placeholder="Retype Password"
    //            className={classNames(styles["textfield"])}
    //            InputProps={{startAdornment: <InputAdornment position="start"><LockIcon sx={{color: "black"}}/></InputAdornment>}} 
    //            style={{ "width": "90%", "marginBottom": "6%"}}
    //        />
    //        <Button 
    //        className={classNames(styles["submit-button"])} 
    //        style={{"borderRadius": "40px", "marginBottom": "5%"}} variant={"contained"}>
    //            REGISTER
    //        </Button>
          
    //    </div>




