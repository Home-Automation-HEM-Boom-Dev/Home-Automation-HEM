import Login from "../../src/components/login/Login";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import styles from "../../src/components/login/LoginPage.module.scss"


export default function LoginPage() {

    return (
        <div className={classNames(styles['wrapper'])}>

            <Container style={{ height: "100vh", display: "flex", alignItems: "center"}} >
                <Paper style={{ width: "fit-content", margin: "0 auto"}} >
                    <Login />
                </Paper>
            </Container>

        </div>
    )
}