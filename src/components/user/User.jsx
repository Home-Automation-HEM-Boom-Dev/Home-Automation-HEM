import { Container, Grid, Avatar, Typography } from "@mui/material";
import styles from "./User.module.scss";
import classNames from "classnames";

export default function User({ username, avatar, size }) {
    return (
        <div className={classNames(styles["user-container"])}>
            <Container maxWidth="md">
                <Grid container className={classNames(styles["grid-container"])}>
                    <Grid item xs={4}>
                        <Avatar className={classNames(styles["avatar-style"])} src={avatar} alt="small-avatar" sx={{ width: size, height: size }}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography className={classNames(styles["username-style"])} variant="body1">{username}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
