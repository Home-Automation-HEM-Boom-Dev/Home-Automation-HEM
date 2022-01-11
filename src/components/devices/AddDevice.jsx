import { CircularProgress, Typography } from "@mui/material";
import classNames from "classnames";
import styles from './AddDevice.module.scss';
import Modal from "../modal/Modal";

export default function AddDevice({ open, searching, found, failed, onDevice, handleSubmit, handleClose }) {
    return (
        <Modal open={open} handleSubmit={handleSubmit} handleClose={handleClose} title={"ADD DEVICE"}
            buttonProps={{ "color": "primary", "display": found || failed ? "inline-block" : "none" }}
            buttonText={found ? "ADD DEVICE" : 'TRY AGAIN'}>

            <div className={classNames(styles.container)}>
                <CircularProgress size={394} sx={{ opacity: 0.3 }} disableShrink variant={found || failed ? "determinate" : searching ? "indeterminate" : ""} value={0} />
                <CircularProgress size={394}
                    sx={{ opacity: failed ? 0.15 : found && 0.4, position: "absolute", color: found ? "primary" : failed && "rgba(24, 28, 36, 1)" }}
                    variant={found || failed ? "determinate" : "indeterminate"}
                    value={100}
                />
                <div className={classNames(styles['progress-image'])}>
                    <img src={found ? onDevice.iconUrl : failed ? "images/no-connection.svg" : "images/search.svg"}></img>
                </div>
            </div>
            <Typography className={classNames(styles['typography'])}>
                {found ? "DEVICE FOUND!" : failed ? "NO DEVICE FOUND..." : "SEARCHING..."}
            </Typography>
        </Modal>
    );
}
