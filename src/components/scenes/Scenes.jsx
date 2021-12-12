import Card from '../card/Card'
import { Grid, Typography } from '@mui/material'
import styles from './Scenes.module.scss'
import classNames from "classnames";

export default function Scenes({ cards = [] }) {
    return (
        <div className={classNames(styles['scenes-container'])}>
            <div className={classNames(styles["scenes-header"])}>
                <Typography variant="h3">Scenes</Typography>
            </div>
            <Grid container rowSpacing={1.5}>
                {cards.map((card, i) => {
                    return (
                        <Grid item key={i} xs={4}><Card iconUrl={card.iconUrl} outlined={card.outlined} /></Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
