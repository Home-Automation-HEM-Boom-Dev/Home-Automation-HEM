import { Grid } from "@mui/material";
import Modal from "../modal/Modal";
import Card from "../card/Card";
import styles from "./ChangeRoom.module.scss";
import classNames from "classnames";

export default function ChangeRoom({ open, onSubmit, handleClose, selected, rooms = [], onScene}) {
    return (
        <Modal open={open} title={"Change room"} buttonText={"Save Changes"} buttonProps={{ "color": "secondary" }} onSubmit={onSubmit} handleClose={handleClose}>
            <Grid container spacing={2} justifyContent="center" maxWidth={750} paddingTop={4}>
                {rooms.map((room, index) => {
                    return (
                        <Grid item key={index}>
                            <Card id={room.id} iconUrl={"images/bed.svg"} title={room.name} selected={selected && selected.id == room.id} onClick={(e) => onScene(e.target)}/>
                        </Grid>
                    );
                })}
            </Grid>
        </Modal>
    );
}