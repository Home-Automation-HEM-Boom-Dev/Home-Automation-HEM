import {InputAdornment, TextField, Button} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import styles from "./Login.module.scss";
import classNames from "classnames";

export default function Login() {
    return (
        <div className={classNames(styles["login-form"])}>
            <TextField id="email-start-adornment" className={classNames(styles["text-field"])} sx={{ m: 1, width: '36ch'}} InputProps={{startAdornment: <InputAdornment position="start"><EmailIcon sx={{color: "black"}}/></InputAdornment>}} />
            <TextField id="password-start-adornment" className={classNames(styles["text-field"])} sx={{ m: 1, width: '36ch' }} InputProps={{startAdornment: <InputAdornment position="start"><LockIcon sx={{color: "black"}}/></InputAdornment>}} />
            <Button className={classNames(styles["button"])} variant={"contained"} color="inherit">Login</Button>
        </div>
    )
}
