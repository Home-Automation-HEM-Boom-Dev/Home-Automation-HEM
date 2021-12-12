import React, { useState } from 'react';
import classNames from "classnames";
import styles from './Cameras.module.scss';
import Card from '../card/Card.jsx';
import { Grid } from '@mui/material';

export default function Cameras({ cameras, hasButton = false }) {
    const [current, setCurrent] = useState("");

    return (
        <Grid container width={802} height={389} spacing={1}>
            <Grid item>
                <Card className={classNames(styles['sth'])} iconUrl={current.videoUrl || "/images/balcony.mp4"} />
            </Grid>
            {cameras.map((camera, i) => (
                <Grid item sx={{ padding: 0 }} onClick={() => setCurrent(camera)}>
                    <Card key={i} iconUrl={camera.videoUrl} outlined={hasButton} />
                </Grid>
            ))}
        </Grid>
    );
};