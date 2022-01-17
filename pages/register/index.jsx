import Register from "../../src/components/register/Register";
import styles from "../../src/components/register/RegisterPage.module.scss";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";


export default function RegisterPage() {
    async function registerUser(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
      

        await fetch('https://hem-api.herokuapp.com/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    alert(`Success ! ${data.email} Registered!`);
                }
            })
    }


    return (
        <div className={classNames(styles['wrapper'])}>
            <Container style={{ height: "100vh", display: "flex", alignItems: "center" }} >
                <Paper style={{ width: "fit-content", margin: "0 auto" }} >
                    <Register onSubmit={registerUser} />
                </Paper>
            </Container>
            <div className={classNames(styles['login-redirect'])} >
                <p>Already registered?<a href="/login">Go to login.</a></p>
            </div>
        </div>
    )
}
