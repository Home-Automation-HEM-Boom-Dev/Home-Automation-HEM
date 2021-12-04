import { Container, Grid, Avatar, Typography } from "@mui/material";
import styles from "./User.module.scss";
import classNames from "classnames";

export default function User({ name, avatar, size, headingSize, hasWelcome = false }) {
    return (
        <div className={classNames(styles["user-container"])}>
            <Container maxWidth="md" disableGutters={true}>
                <Grid container sx={{ width: size * 4 }} className={classNames(styles["grid-container"])} spacing={2}>
                    <Grid item xs={4}>
                        <Avatar className={classNames(styles["avatar-style"])} src={avatar} alt="small-avatar" sx={{ width: size, height: size }} />
                    </Grid>
                    <Grid item xs={8}>
                        <div className={classNames(styles["heading"])}>
                            {hasWelcome ? <p className={classNames(styles["welcome"])}>Welcome home,</p> : null}
                            <Typography className={classNames(styles["username-style"])} variant={headingSize}>{name}</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
