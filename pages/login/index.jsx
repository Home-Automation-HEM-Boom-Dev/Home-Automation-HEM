import LoginForm from "../../src/components/login/LoginForm";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import styles from "../../src/components/login/LoginPage.module.scss"


export default function LoginPage(){

    return (
     <div className={classNames(styles['wrapper'])}>
      <Paper>
          <Container>
              <LoginForm />
          </Container>
      </Paper>
     </div>
    )
}