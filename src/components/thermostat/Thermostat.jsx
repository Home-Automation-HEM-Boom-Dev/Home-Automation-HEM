import { CircularProgress, IconButton, Stack } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutline';
import { ComposedChart, Line } from 'recharts';
import classNames from 'classnames';
import styles from './Thermostat.module.scss';
import { useState, useEffect } from 'react';

export default function Thermostat({ data }) {
    const [temperature, setTemperature] = useState(15);
  
    const handleIncrease = () => {
        setTemperature(temperature + 1);
    };

    const handleDecrease = () => {
        setTemperature(temperature - 1);
    };

    useEffect(() => {
        setTemperature(25);
    }, []);

    return (
        <div className={classNames(styles["container"])}>
            <div className={classNames(styles["statistic"])}>
                <Stack className={classNames(styles["circular-progress"])}>
                    <CircularProgress style={{ color: '#B94D60' }} variant="determinate" thickness={2} value={25} size={375}  />
                    <CircularProgress className={classNames(styles["left-semi-circle"])} style={{ color: '#FFFFFF'}} variant="determinate" thickness={2} value={temperature} size={375}  />
                </Stack>
                <div className={classNames(styles["temperature-buttons"])}>
                    <IconButton disabled={temperature <= 15 ? true : false} onClick={handleDecrease}>
                        <RemoveCircleOutlinedIcon className={classNames(styles["buttons"])} />
                    </IconButton>
                    <h1 className={classNames(styles["temperature"])}>{temperature}&deg;</h1>
                    <IconButton disabled={temperature >= 50 ? true : false} onClick={handleIncrease} >
                        <AddCircleOutlinedIcon className={classNames(styles["buttons"])}/>
                    </IconButton>
                </div>
            </div>
            <div className={classNames(styles["graph"])}>
                <h5 className={classNames(styles["temperature-graph"])}>TEMPERATURE GRAPH</h5>
                <ComposedChart width={803} height={150} data={data}>
                    <Line type="monotone" dataKey="temperature" stroke="#FFFFFF" strokeWidth={3} dot={{ strokeWidth: 7 }} />
                </ComposedChart>
            </div>
        </div>
    )
}
