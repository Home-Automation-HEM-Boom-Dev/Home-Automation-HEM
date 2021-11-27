import {Typography} from "@mui/material"
import styles from "./Weather.module.scss";
import classNames from "classnames";

export default function Weather({degrees, type}) {
    return (
        <div className={classNames(styles["weather-wrapper"])}>
            <img className={classNames(styles["image"])} src={`/images/${type}.svg`} alt="day-type" />
            <div className={classNames(styles["weather-info"])}>
                <Typography variant="body1" className={classNames(styles.weather)}>Weather</Typography>
                <Typography variant="h1">{`${degrees}°`}</Typography>
            </div>
        </div>
    )
}
