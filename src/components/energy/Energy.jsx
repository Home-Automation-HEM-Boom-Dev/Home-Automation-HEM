import { Grid, Typography, Select, MenuItem, InputLabel, FormControl } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ComposedChart, CartesianGrid, Line, Area, XAxis } from "recharts"
import classNames from 'classnames';
import styles from "./Energy.module.scss";


export default function Energy({ data }) {
    return (
        <div className={classNames(styles["container"])}>
            <Grid container>
                <Grid item width="100%">
                    <div className={classNames(styles["energy-header"])}>
                        <Typography variant="h3">Energy</Typography>
                        <FormControl className={classNames(styles["form-control"])} fullWidth>
                            <InputLabel id="energy-select-lable">This week</InputLabel>
                            <Select defaultValue="" IconComponent={KeyboardArrowDownIcon} labelId="energy-select-lable" id="energy-select-id" label="This week">
                                <MenuItem></MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classNames(styles["graph"])}>
                        <ComposedChart width={803} height={389} data={data}>
                            <Line type="monotone" dataKey="temperature" stroke="#E150A6" strokeWidth={6} dot={{strokeWidth: 7 }} />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5" horizontal={false} />
                            <XAxis dataKey="hour" unit={":00"} padding={{ left: 50, right: 50 }} tickMargin={15} />
                            <Area type="monotone" dataKey="temperature" fillOpacity={0.3} fill="#DF54A7" stroke="" opacity={0.3} />
                        </ComposedChart>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
