import Login from "../../src/components/login/Login";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import styles from "../../src/components/login/LoginPage.module.scss"
import { useRouter } from "next/dist/client/router";

export default function LoginPage() {
    const router = useRouter();

    async function loginUser(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const loginData = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        const res = await fetch("https://hem-api.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData)
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem("accessToken", data["accessToken"]);
            router.push("/");
        }
    }

    return (
        <div className={classNames(styles['wrapper'])}>
            <Container style={{ height: "100vh", display: "flex", alignItems: "center" }} >
                <Paper style={{ width: "fit-content", margin: "0 auto" }} >
                    <Login onSubmit={loginUser}/>
                </Paper>
            </Container>
            <div className={classNames(styles['register-redirect'])} >
                <p>Don't have an account?<a href="/register"> Register today!</a></p>
            </div>
        </div>
    )
}