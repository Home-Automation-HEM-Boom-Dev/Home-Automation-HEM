import classNames from "classnames";
import styles from "./Header.module.scss";
import { Paper } from "@mui/material";

export default function Header({ right, left, isRoom}) {

    return (
        <div className={classNames(styles['header-wrapper'])}>
            <div className={classNames(styles['container-wrapper'])}>
                <Paper >
                    <div className={classNames(styles['left-container'], isRoom && styles['room-left'])}> {left} </div>
                    <div className={classNames(styles['right-container'], isRoom && styles['room-right'])}> {right} </div>
                </Paper>
            </div>
        </div>
    )
}