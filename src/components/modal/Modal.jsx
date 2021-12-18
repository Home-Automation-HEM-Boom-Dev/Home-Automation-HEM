import styles from "./Modal.module.scss";
import classNames from "classnames";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";

export default function Modal({ open, title, buttonText, handleSubmit, handleClose }) {

    return (
        <div className={classNames(styles["modal-wrapper"])}>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <Button onClick={handleSubmit}>{buttonText}</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}