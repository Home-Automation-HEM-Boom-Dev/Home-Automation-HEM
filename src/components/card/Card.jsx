import styles from "./Card.module.scss";
import {Card} from '@mui/material';
import classNames from "classnames";
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';



export default function MuiCard({iconUrl, outlined=false}){
    // const styles = {borderRadious: "10%"}
    return (
        <Card className={classNames(styles['card'])} style={{border: outlined ? "3px solid #7441F3" : ""}}> 
         <CardContent >
          <IconButton className={classNames(styles['icon-button'])}>
           {iconUrl && <img src={`/images/${iconUrl}`} />}
          </IconButton>
         </CardContent>
        </Card>
    )
}
