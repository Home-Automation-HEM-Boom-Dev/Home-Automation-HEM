import Modal from "../modal/Modal";
import SceneComposer from "./SceneComposer";
import { TextField } from "@mui/material";



export default function AddScene({ open, title, buttonText, onSubmit, handleClose, devices, rooms, selected, onScene }) {
    return (
        <Modal open={open} title={title} buttonText={buttonText} children={[<TextField  placeholder="Scene Name"></TextField>, <SceneComposer devices={devices} rooms={rooms} selected={selected} onScene={onScene}></SceneComposer>]} handleSubmit={onSubmit} onClose={handleClose} />
    );
}