import Card from '../card/Card'
import { Grid } from '@mui/material'
import styles from './Scenes.module.scss'
import classNames from "classnames";
import { useState } from 'react';

export default function Scenes({ cards = [], selected = {id: 0}, onScene = () => { } }) {
    return (
        <div className={classNames(styles['scenes-container'])}>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {cards.map((card, i) => {
                    return (
                        <Grid item key={i} xs={12} sm={6} lg={4}><Card outlined={selected && selected.id == card.id} selected={selected && selected.id == card.id} onClick={onScene} {...card} /></Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
