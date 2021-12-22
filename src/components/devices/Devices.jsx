import classNames from "classnames";
import styles from "./Devices.module.scss";
import Card from "./../../components/card/Card";
import { Grid, Typography } from "@mui/material";


export default function Devices({ devices }) {
    return (
        <div className={classNames(styles['devices-wrapper'])}>
            <div className={classNames(styles["devices-header"])}>
                <Typography variant="h3">Devices</Typography>
            </div>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {devices.map((dev, i) => {
                    return (
                        <Grid item key={i} xs={12} sm={6} lg={4}><Card variant={(dev.variant)} outlined={dev.outlined} title={dev.variant} iconUrl={dev.iconUrl} /></Grid>
                    )
                })}
            </Grid>
        </div>
    )
}