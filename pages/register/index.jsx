import Register from "../../src/components/register/Register";
import styles from "../../src/components/register/RegisterPage.module.scss";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";

export default function RegisterPage() {
    return (
       
        <div className={classNames(styles['wrapper'])}>
            <Container style={{ height: "100vh", display: "flex", alignItems: "center"}} >
                <Paper style={{ width: "fit-content", margin: "0 auto"}} >
                    <Register />
                </Paper>
            </Container>
            <div className={classNames(styles['login-redirect'])} >
                <p>Already registered?<a href="/login">Go to login.</a></p> 
            </div>  
        </div>
        
        
    )
}