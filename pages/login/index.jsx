import Login from "../../src/components/login/Login";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import styles from "../../src/components/login/LoginPage.module.scss"


export default function Login(){

    return (
     <div className={classNames(styles['wrapper'])}>
      <Paper>
          <Container>
              <Login />
          </Container>
      </Paper>
     </div>
    )
}