import styles from "./Card.module.scss";
import {Card} from '@mui/material';
import classNames from "classnames";
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CardMedia from "@mui/material/CardMedia";



export default function MuiCard({iconUrl, outlined=false}){
    let index = `${iconUrl.length}`;
    let isSvgorVideo = +index - 4;
    const svgOrMp4 = `${iconUrl.substring(isSvgorVideo)}`;
    const isVideo = `${svgOrMp4 === ".mp4" ? true : false}`
    
    return (
        <Card className={classNames(styles['card'])} style={{border: outlined ? "3px solid #7441F3" : ""}}> 
         <CardContent >
          <IconButton className={classNames(styles['icon-button'])}>
           {iconUrl && <CardMedia component={svgOrMp4 === ".svg" ? "img" : "video"}  src={`/images/${iconUrl}`} 
             autoPlay={isVideo}  />}
          </IconButton>
         </CardContent>
        </Card>
    )
}

// <img src={`/images/${iconUrl}