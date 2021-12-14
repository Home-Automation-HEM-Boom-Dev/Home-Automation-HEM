import React, { useState } from 'react';
import classNames from "classnames";
import styles from './Cameras.module.scss';
import Card from '../card/Card.jsx';
import { Grid } from '@mui/material';

export default function Cameras({ cameras, hasButton = false }) {
    const [current, setCurrent] = useState({});
    const [choosenCard, setChoosenCard] = useState();

    return (
        <div className={classNames(styles["container"])}>
            <Grid container spacing={3} sx={{ margin: 0 }} className={classNames(styles["main-grid-container"])}>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <div className={classNames(styles["big-card"])}>
                                <Card iconUrl={current.videoUrl || ""} />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classNames(styles["mini-grid-item"])}>
                    <Grid container spacing={1.8} className={(hasButton == true) || (cameras.length > 6)  ? classNames(styles["has-button"]) : ""}>
                        {cameras.map((camera, i) => (
                            <Grid item key={i}>
                                <div className={classNames(styles["mini-card"])} onClick={() => setChoosenCard(i)}>
                                    <Card iconUrl={camera.videoUrl} outlined={i == choosenCard ? true : false} onClick={() => setCurrent(camera)} />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    {hasButton && <div className={classNames(styles["button"])}><Card iconUrl={"images/plus.svg"} outlined={true} onClick={() => {}} /></div>}
                </Grid>
            </Grid>
        </div>
    );
};