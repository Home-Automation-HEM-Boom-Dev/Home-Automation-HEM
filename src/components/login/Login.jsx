import { InputAdornment, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import styles from "./Login.module.scss";
import classNames from "classnames";
import { useState } from "react";

export default function Login({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={classNames(styles["login-form"])}>
            <form onSubmit={onSubmit}>
                <TextField
                    id="email-start-adornment"
                    className={classNames(styles["text-field"])}
                    sx={{ m: 1, width: '36ch' }}
                    InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon sx={{ color: "black" }} /></InputAdornment> }}
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField id="password-start-adornment"
                    className={classNames(styles["text-field"])}
                    sx={{ m: 1, width: '36ch' }}
                    InputProps={{ startAdornment: <InputAdornment position="start"><LockIcon sx={{ color: "black" }} /></InputAdornment> }}
                    value={password}
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className={classNames(styles["button"])} variant={"contained"} color="inherit" type="submit">Login</Button>
            </form>
        </div>
    )
}
