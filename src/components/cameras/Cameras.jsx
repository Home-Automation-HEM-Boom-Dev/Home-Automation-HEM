import styles from "./Cameras.module.scss";
import Grid from "@mui/material/Grid";
import Card from "../card/Card";
import classNames from "classnames";

export default function Cameras({cameras, hasButton}){
  
const cards = cameras.map(camera => {
    <Card iconUrl={camera.videoUrl} hasButton={hasButton}/>
})

    return (
        <div className={classNames(styles['cameras-main'])}>
          <Grid container >
          {cards}
          </Grid>
        </div>
    )
}