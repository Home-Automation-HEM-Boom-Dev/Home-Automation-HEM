import Card from '../card/Card'
import { Grid, Typography} from '@mui/material'
import styles from './Rooms.module.scss'
import classNames from "classnames";

export default function Rooms({ rooms = [] }) {
  return (
    <div className={styles['rooms-wrapper']}>
      <div className={classNames(styles["rooms-header"])}>
        <Typography variant="h3">Rooms</Typography>
      </div>
      <Grid container spacing={3}>
        {rooms.map((room, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} lg={2}>
              <Card title={room.title} iconUrl={room.iconUrl} outlined={room.outlined} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}