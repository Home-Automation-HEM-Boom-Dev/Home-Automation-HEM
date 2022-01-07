import styles from "./SceneComposer.module.scss";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import Scenes from "./Scenes";
import { useMemo } from "react";

const devices = [
    {
        "id": 1,
        "name": "Lightbulb",
        "iconUrl": "/images/plug.svg",
        "roomId": 1,
        "userId": 1
    },
    {
        "id": 2,
        "name": "Air Conditioner",
        "iconUrl": "/images/plug.svg",
        "roomId": 1,
        "userId": 1
    },
    {
        "id": 3,
        "name": "Eletctric Switch",
        "iconUrl": "/images/bulb.svg",
        "roomId": 1,
        "userId": 1
    },
    {
        "id": 4,
        "name": "Water Heater",
        "iconUrl": "/images/bulb.svg",
        "roomId": 3,
        "userId": 1
    }
];

const rooms = [
    {
        "name": "Living Room",
        "type": "living-room",
        "id": 1,
        "propertyId": 1,
        "userId": 1
    },
    {
        "name": "Bedroom",
        "type": "bedroom",
        "id": 2,
        "propertyId": 1,
        "userId": 1
    },
    {
        "name": "Bathroom",
        "type": "bathroom",
        "id": 3,
        "propertyId": 1,
        "userId": 1
    },
    {
        "name": "Toilet",
        "type": "toilet",
        "id": 4,
        "propertyId": 1,
        "userId": 1
    },
    {
        "name": "Patio",
        "type": "patio",
        "id": 5,
        "propertyId": 1,
        "userId": 1
    }
];

const scenes = rooms.forEach(room => {
     
     <Typography variant="h1">{room.name}</Typography>
     {devices.map(device => {
        <Grid item xs={1} md={2} lg={3}>

            </Grid>
     })}
    
})

export default function SceneComposer({ selected, onScene }) {

    return (
        <div>
            <Grid>
            </Grid>
        </div>
    )
}