import classNames from "classnames";
import styles from "./Devidec.module.scss";
import Card from "./../../components/card/Card";
import { Grid, Chip } from "@mui/material";

export default function Devices({devices}) {
const devicesList = devices.map((device, i) => {
    <Grid item><Card key={i} title={device.title} iconUrl={device.iconUrl}/></Grid>
})
    return (
        <div className={classNames(styles['devices-wrapper'])}>
         <Grid container>
          {devicesList}
         </Grid>
        </div>
    )
}