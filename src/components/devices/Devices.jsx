import classNames from "classnames";
import styles from "./Devices.module.scss";
import Card from "./../../components/card/Card";
import { Grid, Chip } from "@mui/material";

export default function Devices({ devices }) {


    return (
        <div className={classNames(styles['devices-wrapper'])}>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {devices.map((dev, i) => {
                    return (
                        <Grid item xs={12} sm={6} lg={3} key={i}><Card  title={dev.title} iconUrl={dev.iconUrl} /></Grid>
                )
                })}
            </Grid>
        </div>
    )
}