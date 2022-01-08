import { TextField, Button, InputAdornment } from "@mui/material";
import styles from "./Register.module.scss";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import classNames from "classnames";


export default function Registrer() {


    return(
       <div className={classNames(styles["register-form"])}>
           <TextField
               defaultValue="Email"
               className={classNames(styles["form-textfield"])}
               InputProps={{startAdornment: <InputAdornment position="start"><EmailIcon sx={{color: "black"}}/></InputAdornment>}} 
               style={{ "width": "90%", "marginBottom": "4%", "marginTop": "5%"}}
               required
           />
           <TextField
               defaultValue="Password"
               className={classNames(styles["form-textfield"])} 
               InputProps={{startAdornment: <InputAdornment position="start"><LockIcon sx={{color: "black"}}/></InputAdornment>}} 
               style={{ "width": "90%", "marginBottom": "4%"}}
               required
           />
           <TextField 
               defaultValue="Retype Password"
               className={classNames(styles["form-textfield"])}
               InputProps={{startAdornment: <InputAdornment position="start"><LockIcon sx={{color: "black"}}/></InputAdornment>}} 
               style={{ "width": "90%", "marginBottom": "6%"}}
               required
           />
           <Button 
           className={classNames(styles["submit-button"])} 
           style={{"border-radius": "40px", "marginBottom": "5%"}} variant="contained">REGISTER</Button>
       </div>
    )
}