import Modal from "../modal/Modal";
import { TextField } from "@mui/material";
import styles from "./AddRoom.module.scss";
import classNames from "classnames";

export default function AddRoom({ open, onSubmit, handleClose }) {
    return (
            <Modal open={open} title={"Add Room"} buttonText={"Add New Room"} handleSubmit={onSubmit} handleClose={handleClose} children={<TextField placeholder="Room Name" InputProps={{startAdornment: <img src="/images/bed.svg" />}}/>} />
    )
}
