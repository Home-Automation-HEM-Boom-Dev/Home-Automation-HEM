import styles from "./Modal.module.scss";
import classNames from "classnames";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";

export default function Modal({ open = true, title = "Modal title", buttonText = "Modal Action", children, handleSubmit, handleClose }) {
    return (
        <Dialog open={open} onClose={handleClose} className={classNames(styles["modal-wrapper"])} >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <Button onClick={handleSubmit}>{buttonText}</Button>
        </Dialog>
    )
}