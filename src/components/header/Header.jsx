import classNames from "classnames";
import styles from "./Header.module.scss";
import { Paper } from "@mui/material";

export default function Header({ right, left }){

    return (
        <div className={classNames(styles['header-wrapper'])}>
            <Paper >
               <div className={classNames(styles['left-container'])}> {left} </div>
               <div className={classNames(styles['right-container'])}> {right} </div>
            </Paper>

        </div>
    )
}