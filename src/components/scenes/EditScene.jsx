import Modal from "../modal/Modal";
import SceneComposer from "./SceneComposer";
import { TextField } from "@mui/material";


export default function EditScene({ open, title, buttonText, onSubmit, handleClose, devices, rooms, selected, onScene }) {
    return (
        <Modal open={open} title={title} buttonText={buttonText} children={[<TextField placeholder="Back Home"></TextField>, <SceneComposer devices={devices} rooms={rooms} selected={selected} onScene={onScene}></SceneComposer>]} handleSubmit={onSubmit} onClose={handleClose} />
    );
}