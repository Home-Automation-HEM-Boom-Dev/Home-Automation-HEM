import Modal from "../modal/Modal";
import SceneComposer from "./SceneComposer";
import { TextField } from "@mui/material";

export default function AddScene({ open, title, buttonText, onSubmit, handleClose, devices, rooms, onScene }) {
    const content = [<TextField  placeholder="Scene Name"></TextField>, <SceneComposer devices={devices} rooms={rooms} onScene={onScene}></SceneComposer>]
    const children = content.map((item, index) => {
        return <div key={index}>{item}</div>
    })
    
    return (
        <Modal open={open} title={title} buttonText={buttonText} children={children} handleSubmit={onSubmit} onClose={handleClose} buttonProps={{"color" : "primary"}} />
    );
}