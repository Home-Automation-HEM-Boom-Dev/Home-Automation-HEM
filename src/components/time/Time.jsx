import classNames from "classnames";
import Typography from '@mui/material/Typography';
import styles from "./Time.module.scss";
import { useEffect, useState } from "react";




export default function Time() {

    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());


    
    useEffect(() => {

        let time = setInterval(() => {
            setHours(new Date().getHours());
            setMinutes(new Date().getMinutes());
        }, 1000)
        return function cleanup() {
            clearInterval(time)
        }
    })





    return (
        <div className={classNames(styles['time-wrapper'])}>
            <Typography variant="body1" className={classNames(styles['time'])}>Time</Typography>
            <Typography variant="h1">
                {hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}
            </Typography>
        </div>
    )
}